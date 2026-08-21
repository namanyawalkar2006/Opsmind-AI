

<img width="1870" height="1080" alt="Screenshot 2026-08-16 234408" src="https://github.com/user-attachments/assets/0cd02166-0d69-4d04-99ec-1e52fb7d069e" />
<div align="center">

# ⚙️ OpsMind AI

### Your AI-Powered DevOps Thinking Partner

**Understand. Troubleshoot. Learn. Build.**

An AI-powered assistant focused on helping developers understand and troubleshoot DevOps concepts, tools, errors, and workflows.

<br />

[![React](https://img.shields.io/badge/React-2026-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![Groq](https://img.shields.io/badge/Groq-LLM%20Inference-F55036?style=for-the-badge)](https://groq.com/)
[![Python](https://img.shields.io/badge/Python-Backend-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<br />

### 🚀 Built to make DevOps problems easier to understand.

</div>

---

## 🧠 What is OpsMind AI?

**OpsMind AI** is a focused AI assistant designed around the world of **DevOps and software engineering**.

Instead of trying to be another general-purpose AI chatbot, OpsMind AI is designed with a specific goal:

> **Help developers understand DevOps problems and find practical solutions faster.**

You can ask questions about areas such as:

- 🐳 Docker
- 🐧 Linux
- 🔀 Git & GitHub
- ⚙️ CI/CD
- ☁️ Cloud & DevOps concepts
- 🛠️ Troubleshooting
- 💻 Developer workflows

The project combines a modern React interface with a Python/FastAPI backend and an LLM accessed through Groq.

---

## 🎯 Why did I build it?

I didn't build OpsMind AI to compete with general-purpose AI assistants.

I built it to understand how an **AI-powered developer tool is actually engineered**.

The project gave me hands-on experience with:

- Building a React frontend
- Designing a Python API with FastAPI
- Connecting a frontend to a backend API
- Integrating an LLM
- Designing system prompts for a specialized use case
- Handling API requests and responses
- Managing environment variables and secrets
- Handling frontend/backend communication
- Designing a developer-focused AI experience

The long-term goal is to evolve OpsMind AI from a simple AI assistant into a more complete **AI-powered DevOps engineering toolkit**.

---

## ✨ Current Features

### 🤖 AI DevOps Assistant

Ask natural-language questions about DevOps and software engineering.

Example:

```text
My Docker container keeps stopping.
How can I troubleshoot it?
```

OpsMind AI can provide a structured explanation and suggest practical troubleshooting steps.

---

### ⚡ Fast AI Responses

The application uses **Groq's inference API** to communicate with an LLM and generate responses quickly.

---

### 🧩 Specialized DevOps Context

OpsMind AI uses a DevOps-focused system prompt to keep responses oriented toward practical engineering topics such as:

- Linux
- Git
- Docker
- CI/CD
- Cloud
- DevOps troubleshooting
- Python automation

---

### 🔐 Environment-Based API Security

API credentials are stored through environment variables rather than being exposed directly in the frontend.

Example:

```env
GROQ_API_KEY=your_api_key_here
```

> Never commit your `.env` file or API keys to GitHub.

---

### 🔗 Full-Stack Architecture

OpsMind AI isn't just a frontend connected directly to an AI API.

It uses a separate backend layer:

```text
React
  │
  │ HTTP Request
  ▼
FastAPI
  │
  │ API Request
  ▼
Groq
  │
  ▼
LLM
  │
  ▼
AI Response
  │
  ▼
FastAPI
  │
  ▼
React UI
```

---

# 🏗️ Architecture

```text
                    ┌─────────────────────┐
                    │      User           │
                    │  DevOps Question    │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React Frontend    │
                    │                     │
                    │   User Interface    │
                    └──────────┬──────────┘
                               │
                         HTTP / JSON
                               │
                               ▼
                    ┌─────────────────────┐
                    │   FastAPI Backend   │
                    │                     │
                    │ API + AI Logic      │
                    └──────────┬──────────┘
                               │
                         API Request
                               │
                               ▼
                    ┌─────────────────────┐
                    │      Groq API       │
                    │                     │
                    │   LLM Inference     │
                    └──────────┬──────────┘
                               │
                         AI Response
                               │
                               ▼
                    ┌─────────────────────┐
                    │    FastAPI          │
                    │    Response         │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │    React UI         │
                    │                     │
                    │  AI DevOps Answer   │
                    └─────────────────────┘
```

---

# 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React |
| Backend | FastAPI |
| Language | Python |
| AI / LLM API | Groq |
| Model | Llama |
| API Communication | HTTP / JSON |
| Development | VS Code |
| Version Control | Git & GitHub |

---

# 📁 Project Structure

```text
opsmind-ai/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ChatBox.jsx
│   │   └── ResponseBox.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── .env
│
├── public/
│
├── .gitignore
├── package.json
├── README.md
└── ...
```

> The exact structure may evolve as OpsMind AI continues to develop.

---

# 🚀 Getting Started

## Prerequisites

Make sure you have installed:

- Node.js
- npm
- Python 3
- Git

You also need a Groq API key.

---

## 1️⃣ Clone the repository

```bash
git clone https://github.com/namanyawalkar2006/opsmind-ai.git
```

```bash
cd opsmind-ai
```

---

## 2️⃣ Install frontend dependencies

```bash
npm install
```

---

## 3️⃣ Set up the backend

Move into the backend directory:

```bash
cd backend
```

Create a virtual environment:

### Windows

```powershell
python -m venv venv
```

Activate it:

```powershell
.\venv\Scripts\Activate.ps1
```

Install dependencies:

```powershell
pip install -r requirements.txt
```

---

## 4️⃣ Configure the Groq API key

Create:

```text
backend/.env
```

Add:

```env
GROQ_API_KEY=your_groq_api_key
```

⚠️ **Never commit your API key to GitHub.**

Make sure `.env` is included in `.gitignore`.

---

## 5️⃣ Start the FastAPI backend

From the `backend` directory:

```powershell
uvicorn main:app --reload
```

The backend should be available at:

```text
http://127.0.0.1:8000
```

You can also open the FastAPI documentation at:

```text
http://127.0.0.1:8000/docs
```

---

## 6️⃣ Start the React frontend

Open another terminal in the project root:

```bash
npm run dev
```

The frontend should be available at:

```text
http://localhost:5173
```

---

# 💬 Example Usage

Ask OpsMind AI:

```text
My Docker container keeps stopping.
How can I troubleshoot it?
```

Or:

```text
What is the difference between Docker image and container?
```

Or:

```text
Explain CI/CD like I'm a beginner.
```

Or:

```text
How can I find large files in Linux?
```

---

# 🔒 Security

OpsMind AI uses environment variables for sensitive credentials.

### Never do this:

```javascript
const apiKey = "my-secret-api-key";
```

### Instead:

```env
GROQ_API_KEY=your_secret_key
```

And keep `.env` out of version control.

---

# 🧪 API

## `GET /`

Checks whether the backend is running.

Example:

```http
GET /
```

Response:

```json
{
  "message": "OpsMind AI backend is running 🚀"
}
```

---

## `POST /ask`

Sends a question to OpsMind AI.

Request:

```json
{
  "question": "What is Docker?"
}
```

Response:

```json
{
  "answer": "Docker is..."
}
```

---

# 🧠 Design Philosophy

OpsMind AI follows one simple idea:

> **Don't build another general AI assistant. Build AI around a real developer workflow.**

The project focuses on combining:

```text
AI
+
Developer Tools
+
DevOps Knowledge
+
Practical Troubleshooting
```

The goal is not merely to generate text.

The goal is to make the generated information **useful to someone solving an engineering problem.**

---

# 🗺️ Roadmap

OpsMind AI is actively evolving.

### ✅ Version 1.0

- [x] React frontend
- [x] FastAPI backend
- [x] Groq API integration
- [x] LLM-powered responses
- [x] DevOps-focused prompting
- [x] Frontend ↔ backend communication
- [x] Environment-based API key management
- [x] Basic error handling

### 🔨 Next

- [ ] Improved Markdown rendering
- [ ] Better code block presentation
- [ ] Copy-code functionality
- [ ] Conversation history
- [ ] Suggested DevOps prompts
- [ ] DevOps-specific modes

### 🚀 Future

- [ ] Docker troubleshooting mode
- [ ] Linux command assistant
- [ ] Git/GitHub troubleshooting
- [ ] CI/CD failure analysis
- [ ] Cloud troubleshooting
- [ ] GitHub Actions integration
- [ ] Containerized deployment
- [ ] CI/CD pipeline
- [ ] Cloud deployment
- [ ] Monitoring & observability

---

# 📊 Project Evolution

```text
                 OPSMIND AI
                     │
                     ▼
              AI Assistant
                     │
                     ▼
             DevOps Assistant
                     │
          ┌──────────┼──────────┐
          ▼          ▼          ▼
       Docker       Git       Linux
          │          │          │
          └──────────┼──────────┘
                     ▼
                  CI/CD
                     │
                     ▼
                  Cloud
                     │
                     ▼
             DevOps Platform
```

---

# 🎓 What I Learned

Building OpsMind AI helped me understand how the different layers of a modern AI application fit together.

### Frontend

- React component architecture
- JSX
- Props
- State management
- API requests
- User interaction

### Backend

- FastAPI
- REST API concepts
- Request/response handling
- CORS
- Python virtual environments

### AI Integration

- LLM API integration
- System prompts
- Model interaction
- AI response handling

### Engineering

- Environment variables
- API security basics
- Frontend/backend architecture
- Debugging
- Git/GitHub workflow

---

# 📸 Screenshots

> Add screenshots of the actual working application here.

Example:

```markdown
![OpsMind AI Dashboard](./screenshots/dashboard.png)
```

Recommended screenshots:

1. Main dashboard
2. DevOps question being entered
3. AI response
4. Code/command response

---

# 🎥 Demo

Coming soon.

A short product demo will demonstrate:

```text
Question
   ↓
React UI
   ↓
FastAPI
   ↓
Groq / LLM
   ↓
AI DevOps Response
```

---

# 🤝 Contributing

Contributions, ideas and improvements are welcome.

If you have an idea:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit your changes
5. Open a pull request

Example:

```bash
git checkout -b feature/new-feature
```

```bash
git add .
git commit -m "feat: add new DevOps feature"
```

```bash
git push origin feature/new-feature
```

---

# 📜 License

This project is licensed under the MIT License.

See the `LICENSE` file for details.

---

# 👨‍💻 Author

## Naman Yawalkar

Computer Engineering Student | DevOps & Cloud Enthusiast | AI Builder

I'm currently exploring:

```text
DevOps
Cloud
Backend Engineering
AI Engineering
Automation
CI/CD
```

### Connect with me

- GitHub: [@namanyawalkar2006](https://github.com/namanyawalkar2006)
- LinkedIn: [Naman Yawalkar](https://www.linkedin.com/in/naman-yawalkar-36a14b369/)

---

<div align="center">

### ⚙️ Built with curiosity. Designed for DevOps. Powered by AI.

**OpsMind AI**

</div>
