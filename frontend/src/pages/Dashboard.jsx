import React, { useEffect, useState } from "react";

const API = "http://localhost:5000";

const CATEGORY_STYLES = {
  PRIORITY:
    "bg-red-500/20 text-red-300 border-red-500/30",
  NORMAL:
    "bg-slate-500/20 text-slate-300 border-slate-500/30",
  SPAM:
    "bg-amber-500/20 text-amber-300 border-amber-500/30",
};

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [emails, setEmails] = useState([]);
  const [selected, setSelected] = useState(null);
  const [emailBody, setEmailBody] = useState(null);

  const [summary, setSummary] = useState(null);
  const [summaryLoading, setSummaryLoading] = useState(false);

  useEffect(() => {
    fetch(`${API}/api/auth-status`, { credentials: "include" })
      .then((r) => r.json())
      .then((data) => {
        if (!data.authenticated) {
          window.location.href = "/";
        } else {
          fetch(`${API}/api/emails`, { credentials: "include" })
            .then((r) => r.json())
            .then(setEmails)
            .finally(() => setLoading(false));
        }
      });
  }, []);

  const openEmail = (id) => {
    setSelected(id);
    setEmailBody(null);
    setSummary(null);
    setSummaryLoading(true);

    fetch(`${API}/api/email/${id}`, { credentials: "include" })
      .then((r) => r.json())
      .then(setEmailBody);

    fetch(`${API}/api/email/${id}/summary`, {
      credentials: "include",
    })
      .then((r) => r.json())
      .then((data) => setSummary(data.summary || []))
      .catch(() => setSummary([]))
      .finally(() => setSummaryLoading(false));
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-slate-950 text-slate-400">
        <div className="animate-pulse tracking-wide">
          Loading your inbox…
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex bg-slate-950 text-slate-100">
      {/* SIDEBAR */}
      <aside className="w-64 bg-slate-900/70 backdrop-blur border-r border-white/10 p-5 flex flex-col">
        <h1 className="text-2xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          APEX Mail
        </h1>

        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-3">
          📥 Inbox
        </button>

        <div className="flex-1" />

        <button
          onClick={() => {
            fetch(`${API}/api/logout`, { credentials: "include" })
              .then(() => (window.location.href = "/"));
          }}
          className="text-sm text-red-400 hover:text-red-300 transition"
        >
          Logout
        </button>
      </aside>

      {/* EMAIL LIST */}
      <section className="w-[420px] border-r border-white/10 overflow-y-auto">
        {emails.map((e) => (
          <div
            key={e.id}
            onClick={() => openEmail(e.id)}
            className={`relative cursor-pointer px-5 py-4 border-b border-white/5 transition
              hover:bg-white/5
              ${selected === e.id ? "bg-white/10" : ""}
            `}
          >
            {/* ACTIVE INDICATOR */}
            {selected === e.id && (
              <div className="absolute left-0 top-0 h-full w-1 bg-cyan-400" />
            )}

            {/* CATEGORY BADGE */}
            <div
              className={`absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-md border font-semibold tracking-wide
                ${CATEGORY_STYLES[e.category || "NORMAL"]}
              `}
            >
              {e.category || "NORMAL"}
            </div>

            <div className="text-sm font-semibold truncate pr-20">
              {e.from}
            </div>
            <div className="text-sm text-slate-300 truncate pr-20">
              {e.subject}
            </div>
            <div className="text-xs text-slate-500 truncate mt-1 pr-20">
              {e.snippet}
            </div>
          </div>
        ))}
      </section>

      {/* EMAIL VIEWER */}
      <main className="flex-1 overflow-y-auto p-8">
        {!emailBody && (
          <div className="h-full flex items-center justify-center text-slate-500">
            Select an email to read
          </div>
        )}

        {emailBody && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-1">
              {emailBody.subject}
            </h2>

            <div className="text-sm text-slate-400 mb-6">
              From: {emailBody.from}
            </div>

            {/* AI SUMMARY */}
            <div className="mb-6 rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-5 backdrop-blur">
              <div className="flex items-center gap-2 text-cyan-300 font-semibold mb-3">
                ✨ AI Summary
              </div>

              {summaryLoading && (
                <div className="text-sm text-slate-400 animate-pulse">
                  Summarizing email…
                </div>
              )}

              {!summaryLoading && summary?.length > 0 && (
                <ul className="space-y-2 text-sm text-slate-200">
                  {summary.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-cyan-400">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {!summaryLoading && summary?.length === 0 && (
                <div className="text-sm text-slate-500">
                  No summary available
                </div>
              )}
            </div>

            {/* EMAIL BODY */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 leading-relaxed">
              {emailBody.body_html ? (
                <div
                  className="prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: emailBody.body_html }}
                />
              ) : (
                <pre className="whitespace-pre-wrap text-sm">
                  {emailBody.body_text}
                </pre>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
