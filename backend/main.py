import os
from pathlib import Path
from pydantic import BaseModel
from dotenv import load_dotenv
from fastapi import FastAPI,HTTPException
from fastapi.middleware.cors import CORSMiddleware
from groq import Groq

load_dotenv(Path(__file__).resolve().parent / ".env")

api_key = os.getenv("GROQ_API_KEY")

if not api_key:
    raise RuntimeError("GROQ_API_KEY is missing from .env")

client = Groq(api_key=api_key)
GROQ_MODEL = "llama-3.1-8b-instant"

app = FastAPI(title="OpsMind AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_origin_regex=r"https?://(localhost|127\.0\.0\.1)(:\d+)?$",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "message": "OpsMind AI backend is running 🚀"
    }


@app.post("/ask")
def ask_question(data: dict):
    question = data.get("question", "").strip()

    if not question:
        return {
            "answer": "Please enter a DevOps question."
        }

    completion = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[
            {
    "role": "system",
    "content": """
You are OpsMind AI, a specialized AI assistant for DevOps engineers and developers.

Your job is to provide practical, accurate and easy-to-follow DevOps guidance.

IMPORTANT RESPONSE FORMAT:

- Never answer as one huge paragraph.
- Keep explanations concise and structured.
- Use Markdown headings when appropriate.
- Use numbered steps for troubleshooting.
- Use bullet points for lists.
- Put Linux, Docker, Git, CI/CD, AWS and other commands inside Markdown code blocks.
- Explain commands briefly after showing them.
- Highlight the likely cause before suggesting a fix.
- When troubleshooting, use this structure when appropriate:

## Problem
Briefly explain what is happening.

## Likely Cause
Explain the most likely reason.

## Solution
Give clear numbered steps.

## Commands
Provide the required commands in code blocks.

## Recommended Action
Give the most useful next step.

Do not force every section when it is unnecessary.
Do not repeat the user's question.
Do not add unnecessary introductory text.
Prefer practical solutions over long theoretical explanations.
"""
},
            {
                "role": "user",
                "content": question,
            },
        ],
        temperature=0.3,
        max_tokens=1000,
    )

    answer = completion.choices[0].message.content

    return {
        "answer": answer
    }
class ErrorRequest(BaseModel):
    error: str


@app.post("/analyze-error")
async def analyze_error(request: ErrorRequest):
    try:
        messages = [
            {
                "role": "system",
                "content": """
You are OpsMind AI, a DevOps error analysis specialist.

Analyze the provided error or log and give a practical troubleshooting response.

Use this structure:

## Error Detected
Briefly identify what the error means.

## Likely Cause
Explain the most likely causes.

## Solution
Give clear numbered troubleshooting steps.

## Commands
Give useful commands in Markdown code blocks when applicable.

## Prevention
Explain how to avoid the problem in the future.

Rules:
- Be concise.
- Do not write one huge paragraph.
- Do not invent information that cannot be inferred from the error.
- If more information is required, clearly say what information is needed.
"""
            },
            {
                "role": "user",
                "content": request.error
            }
        ]

        completion = client.chat.completions.create(
            model=GROQ_MODEL,
            messages=messages,
            temperature=0.2,
        )

        answer = completion.choices[0].message.content

        return {"answer": answer}

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )