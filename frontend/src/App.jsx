import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ChatBox from "./components/ChatBox";
import ResponseBox from "./components/ResponseBox";

function App() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState(
    "Your DevOps answer will appear here."
  );
  const [loading, setLoading] = useState(false);

  async function handleAsk() {
    if (!question.trim()) {
      setResponse("Please enter a DevOps question first.");
      return;
    }

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("http://127.0.0.1:8000/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: question,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.detail || "Backend request failed");
      }

      setResponse(data.answer);
    } catch (error) {
      console.error("OpsMind Error:", error);
      setResponse("❌ Could not connect to the OpsMind AI backend.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <Hero />

        <div className="chat-container">
          <ChatBox
            question={question}
            setQuestion={setQuestion}
            onAsk={handleAsk}
            loading={loading}
          />

          <ResponseBox response={response} />
        </div>
      </main>
    </div>
  );
}

export default App;