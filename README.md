## 🤖 APEX  
_Assess, Prioritize, Execute, Xclude_

A modern AI-powered digital decluttering prioritization system that helps users manage emails with intelligent prioritization, summarization, and cleanup features for Gmail and Outlook only.[1]

Our Mission: **Boost productivity, reduce digital clutter, and improve digital well-being while ensuring security and privacy.**[1]

***

## 📖 Table of Contents

- [About](#%EF%B8%8F-about)  
- [Features](#features)  
  - [Email Management](#email-management)  
- [Dashboards & Project Structure](#dashboards--project-structure)  
- [Tech Stack](#tech-stack)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Screenshots](#screenshots)  
- [Team Members](#team-members)  
- [Future Scope](#future-scope)  
- [Contributing](#contributing)  
- [License](#%EF%B8%8F-license)

---

## 📝 About

**APEX - Declutter Prioritization System** is a smart productivity tool that integrates with **Gmail and Outlook** to clean, organize, and prioritize your email communication.[1]

Using advanced AI, NLP, and smart automation, APEX helps users focus on what truly matters by:

- 📌 Prioritizing urgent tasks and messages  
- 🗂 Organizing cluttered inboxes and attachments  
- 🌱 Providing wellness insights for digital balance  
- 🔐 Ensuring top-notch security and privacy  

***

## 🚀 Features

### 📩 Email Management

- **Intelligent Prioritization & Sentiment Analysis**: Flag top-priority messages based on content, sender reputation, and emotional tone analysis.  
- **Email Summarization**: Condense long email threads and newsletters into concise, actionable summaries.  
- **Smart Unsubscribe & Block Suggestions**: Proactively manage junk and promotional emails with AI-powered recommendations.  
- **Thread Grouping & Conversation Clustering**: Automatically group related emails (e.g., "Project Submissions," "Order Confirmations").  
- **Attachment Management & Cleanup**: Detect duplicate files, large attachments, and suggest cloud storage solutions.  
- **Phishing & Malicious Link Detection**: Protect against malware, phishing attempts, and suspicious links.  
- **Daily/Weekly Digest**: Receive summarized overviews of top-priority emails, deadlines, and upcoming meetings.  

***

## 🗂 Dashboards & Project Structure

### Dashboard Features

| Dashboard            | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| 📧 Email Dashboard   | Prioritized inbox, summarization panel, attachment cleanup, digest overview |
| 🔐 Security Dashboard| Account linking, encryption status, authentication settings                 |
| 🌱 Wellness Dashboard| Declutter report, productivity analytics, digital balance insights          |

### Project Structure

```bash
declutter-prioritization/
│
├─ backend/
│  ├─ controllers/          # Business logic handlers
│  ├─ models/               # Database schemas
│  ├─ routes/               # API route definitions
│  ├─ utils/                # Helper functions
│  └─ server.js             # Express server entry point
│
├─ frontend/
│  ├─ components/           # Reusable React components
│  ├─ pages/                # Page-level components
│  ├─ styles/               # CSS/styling files
│  └─ App.js                # Main React application
│
├─ scripts/
│  └─ setupAI.js            # AI model initialization
│
├─ config/
│  └─ db.js                 # Database configuration
│
├─ .env                     # Environment variables
├─ package.json             # Project dependencies
└─ README.md                # Project documentation
```

***

## 🛠 Tech Stack

**Frontend:** React.js, Redux, CSS/Styled Components  
**Backend:** Node.js, Express.js, MongoDB  
**AI & ML:** Python, TensorFlow, OpenAI API  
**Security:** JWT, End-to-End Encryption[2][3]

***

## ⚙️ Installation

### Prerequisites

- Node.js v18 or higher  
- MongoDB installed and running  
- npm or yarn package manager[4]

### Steps

```bash
# Clone the repository
git clone https://github.com/Archana7224/APEX-An-AI-Powered-Digital-Decluttering-and-Prioritization-System-.git

# Navigate to project directory
cd APEX-An-AI-Powered-Digital-Decluttering-and-Prioritization-System-

# Install dependencies
npm install

# Create .env file and configure environment variables
cp .env.example .env

# Run database migrations (if applicable)
npm run migrate

# Start the development server
npm run dev
```

### Environment Variables

Create a `.env` file in the root directory with the following:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GMAIL_API_KEY=your_gmail_api_key
OUTLOOK_API_KEY=your_outlook_api_key
```

***

## 💻 Usage

1. **Login to the Dashboard**  
   Access the application at `http://localhost:3000` and create an account.  

2. **Connect Your Email Accounts**  
   Link your **Gmail** and **Outlook** accounts securely.  

3. **View Analytics**  
   Navigate through different dashboards to view:  
   - Prioritized inbox  
   - Attachment cleanup suggestions  
   - Weekly declutter reports  

4. **Enable AI Recommendations**  
   Activate AI-powered suggestions for automated cleanup and wellness-focused decluttering patterns.  

***

## 📸 Screenshots

> _Add actual screenshot images to your repository and update the paths below._  

- Dashboard Overview  
- Email Prioritization  
- Attachment Cleanup  

---

## 👥 Team Members

| Name            | Role                         | GitHub                                      |
|-----------------|------------------------------|---------------------------------------------|
| Aaditya Kapoor  | Team Lead & UI /UX Designer  | [@aaditya-kapoor](https://github.com/aaditya2107) |
| Anshul Kushwaha | Documentation & Presentation | [@anshul-kushwaha](https://github.com/anshul2045) |
| Aachal Patil    | Frontend Developer           | [@aachal-patil](https://github.com/aachalpatil0403) |
| Archana Nair    | Backend Developer            | [@Archana7224](https://github.com/Archana7224) |

***

## 🌟 Future Scope

- 💬 **Expand Email Intelligence**: Deeper classification (personal, transactional, promotional) and auto-rules for Gmail and Outlook.  
- 📱 **Desktop & Mobile Clients**: Native apps for faster access to email decluttering workflows.  
- 🤖 **AI Wellness Assistant**: Personalized recommendations based on email overload, response time, and work patterns.  
- 🔔 **Smart Notifications**: Context-aware notification management for important vs low-priority emails.  
- 📊 **Advanced Analytics**: Deeper insights into productivity patterns and communication behavior.  

***

## 📜 License

This project is licensed under the MIT License – free to use, modify, and distribute.[1]
See the `LICENSE` file for more details.

[1](https://docs.github.com/articles/licensing-a-repository)
[2](https://godspeed.systems/docs/microservices-framework/authentication/jwt-authentication)
[3](https://www.freecodecamp.org/news/the-json-web-token-handbook-learn-to-use-jwts-for-web-authentication/)
[4](https://www.makeareadme.com)
[5](https://github.com/ApexAI)
[6](https://github.com/tankvn/awesome-ai-tools/blob/main/Productivity.md)
[7](https://github.com/Apex-CS)
[8](https://github.com/tankvn/awesome-ai-tools)
[9](https://github.com/tribixbite/awesome)
[10](https://gist.github.com/adamveld12/b64e74d14d7d9043b85c)
[11](https://github.com/JustAndrej2510/apex-project)
[12](https://github.com/remy/mit-license)
[13](https://github.com/emqx/emqx/discussions/12093)
[14](https://github.com/viktorbezdek/awesome-github-projects)
[15](https://gist.github.com/ckib16/8732561535ed766cd6b8)
[16](https://stackoverflow.com/questions/74550175/how-do-i-store-a-jwt-secret-in-an-environment-variable-and-then-use-it-in-anothe)
[17](https://fossunited.org/hack/fosshack25/projects/all)
[18](https://github.com/othneildrew/Best-README-Template/blob/main/LICENSE.txt)
[19](https://docs.chainstack.com/docs/tutorial-mastering-jwt-how-to-implement-secure-user-authentication)
[20](https://help.salesforce.com/s/articleView?id=release-notes.rn_tools_cli.htm&language=en_US&release=256&type=5)