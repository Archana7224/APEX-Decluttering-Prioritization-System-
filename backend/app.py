from flask import Flask, redirect, session, request, jsonify
import os
import base64

from flask_cors import CORS
from google_auth_oauthlib.flow import Flow
from googleapiclient.discovery import build
from google.oauth2.credentials import Credentials

# 🔹 Gemini
import google.generativeai as genai

# ---------------- CONFIG ----------------

os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"  # local dev only

GOOGLE_CLIENT_SECRETS_FILE = "credentials.json"
SCOPES = ["https://www.googleapis.com/auth/gmail.readonly"]

BACKEND_URL = "http://localhost:5000"
FRONTEND_URL = "http://localhost:5173"
REDIRECT_URI = f"{BACKEND_URL}/oauth/callback"

# 🔹 Gemini config
GEMINI_API_KEY = ""
genai.configure(api_key=GEMINI_API_KEY)

app = Flask(__name__)
app.secret_key = "dev-secret-key"

CORS(
    app,
    supports_credentials=True,
    origins=[FRONTEND_URL],
)

# ---------------- HELPERS ----------------

def credentials_to_dict(credentials):
    return {
        "token": credentials.token,
        "refresh_token": credentials.refresh_token,
        "token_uri": credentials.token_uri,
        "client_id": credentials.client_id,
        "client_secret": credentials.client_secret,
        "scopes": credentials.scopes,
    }


def get_gmail_service():
    creds_data = session.get("credentials")
    if not creds_data:
        return None

    credentials = Credentials(
        token=creds_data["token"],
        refresh_token=creds_data.get("refresh_token"),
        token_uri=creds_data["token_uri"],
        client_id=creds_data["client_id"],
        client_secret=creds_data["client_secret"],
        scopes=creds_data["scopes"],
    )

    return build("gmail", "v1", credentials=credentials)


def fetch_last_10_emails(service):
    result = service.users().messages().list(
        userId="me",
        maxResults=10,
    ).execute()

    return result.get("messages", [])


def read_email_preview(service, msg_id):
    msg = service.users().messages().get(
        userId="me",
        id=msg_id,
        format="metadata",
        metadataHeaders=["From", "Subject"],
    ).execute()

    headers = msg.get("payload", {}).get("headers", [])
    data = {h["name"].lower(): h["value"] for h in headers}

    return {
        "id": msg_id,
        "from": data.get("from", ""),
        "subject": data.get("subject", ""),
        "snippet": msg.get("snippet", ""),
    }


def get_full_email(service, msg_id):
    msg = service.users().messages().get(
        userId="me",
        id=msg_id,
        format="full",
    ).execute()

    headers = msg.get("payload", {}).get("headers", [])
    header_map = {h["name"].lower(): h["value"] for h in headers}

    body_html = None
    body_text = None

    def walk_parts(part):
        nonlocal body_html, body_text

        mime = part.get("mimeType")
        data = part.get("body", {}).get("data")

        if data:
            decoded = base64.urlsafe_b64decode(data).decode(
                "utf-8", errors="ignore"
            )

            if mime == "text/html" and body_html is None:
                body_html = decoded
            elif mime == "text/plain" and body_text is None:
                body_text = decoded

        for sub in part.get("parts", []):
            walk_parts(sub)

    walk_parts(msg.get("payload", {}))

    return {
        "from": header_map.get("from", ""),
        "subject": header_map.get("subject", ""),
        "body_html": body_html,
        "body_text": body_text,
    }

# ---------------- GEMINI ----------------

def summarize_email_with_gemini(email_text):
    model = genai.GenerativeModel("models/gemini-2.5-flash")

    prompt = f"""
Summarize the following email into exactly 3 concise bullet points.
Each bullet should be one sentence.
No emojis. No extra text.

EMAIL:
{email_text}
"""

    response = model.generate_content(prompt)
    text = response.text or ""

    bullets = [
        line.lstrip("-• ").strip()
        for line in text.split("\n")
        if line.strip()
    ]

    return bullets[:3]


def classify_email_snippets(snippets):
    """
    snippets = [{id, snippet}]
    returns = {id: PRIORITY | NORMAL | SPAM}
    """

    model = genai.GenerativeModel("models/gemini-2.5-flash")

    formatted = "\n".join(
        [f"{i+1}. {s['snippet']}" for i, s in enumerate(snippets)]
    )

    prompt = f"""
You are an email classifier.

Classify each email snippet into ONE category:
PRIORITY, NORMAL, or SPAM.

Rules:
- Order must match input
- Output ONLY labels
- One label per line
- No explanations

EMAIL SNIPPETS:
{formatted}
"""

    response = model.generate_content(prompt)
    text = response.text or ""

    labels = [
        line.strip().upper()
        for line in text.split("\n")
        if line.strip()
    ]

    while len(labels) < len(snippets):
        labels.append("NORMAL")

    return {
        snippets[i]["id"]: labels[i]
        for i in range(len(snippets))
    }

# ---------------- AUTH ROUTES ----------------

@app.route("/login")
def login():
    flow = Flow.from_client_secrets_file(
        GOOGLE_CLIENT_SECRETS_FILE,
        scopes=SCOPES,
        redirect_uri=REDIRECT_URI,
    )

    auth_url, state = flow.authorization_url(
        access_type="offline",
        include_granted_scopes="true",
    )

    session["oauth_state"] = state
    return redirect(auth_url)


@app.route("/oauth/callback")
def oauth_callback():
    state = session.get("oauth_state")

    flow = Flow.from_client_secrets_file(
        GOOGLE_CLIENT_SECRETS_FILE,
        scopes=SCOPES,
        state=state,
        redirect_uri=REDIRECT_URI,
    )

    flow.fetch_token(authorization_response=request.url)
    credentials = flow.credentials

    session["credentials"] = credentials_to_dict(credentials)
    return redirect(f"{FRONTEND_URL}/dashboard")

# ---------------- API ROUTES ----------------

@app.route("/api/auth-status")
def auth_status():
    return jsonify({
        "authenticated": "credentials" in session
    })


@app.route("/api/emails")
def api_emails():
    service = get_gmail_service()
    if not service:
        return jsonify({"error": "unauthorized"}), 401

    messages = fetch_last_10_emails(service)

    emails = [
        read_email_preview(service, m["id"])
        for m in messages
    ]

    snippet_payload = [
        {"id": e["id"], "snippet": e["snippet"]}
        for e in emails
        if e["snippet"].strip()
    ]

    try:
        classifications = classify_email_snippets(snippet_payload)
    except Exception:
        classifications = {}

    for email in emails:
        email["category"] = classifications.get(
            email["id"], "NORMAL"
        )

    return jsonify(emails)


@app.route("/api/email/<msg_id>")
def api_email(msg_id):
    service = get_gmail_service()
    if not service:
        return jsonify({"error": "unauthorized"}), 401

    email = get_full_email(service, msg_id)
    return jsonify(email)


@app.route("/api/email/<msg_id>/summary")
def api_email_summary(msg_id):
    service = get_gmail_service()
    if not service:
        return jsonify({"error": "unauthorized"}), 401

    email = get_full_email(service, msg_id)

    text = email.get("body_text") or email.get("body_html") or ""
    if not text.strip():
        return jsonify({"summary": []})

    summary = summarize_email_with_gemini(text)

    return jsonify({"summary": summary})


@app.route("/api/logout")
def logout():
    session.clear()
    return jsonify({"success": True})

# ---------------- RUN ----------------

if __name__ == "__main__":
    app.run(debug=True)
