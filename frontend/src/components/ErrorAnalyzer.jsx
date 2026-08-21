import { useState } from "react";

function ErrorAnalyzer() {
  const [errorText, setErrorText] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState("");

  async function analyzeError() {
    if (!errorText.trim()) {
      setResult("Please paste an error or log first.");
      return;
    }

    setAnalyzing(true);
    setResult("");

    try {
      const response = await fetch("http://127.0.0.1:8000/analyze-error", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          error: errorText,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Analysis failed");
      }

      setResult(data.answer);
    } catch (error) {
      console.error("Error Analyzer:", error);
      setResult("❌ Could not connect to OpsMind AI.");
    } finally {
      setAnalyzing(false);
    }
  }

  return (
    <section className="error-analyzer">
      <div className="analyzer-header">
        <span className="analyzer-icon">🔧</span>

        <div>
          <h2>DevOps Error Analyzer</h2>
          <p>Paste an error or log and let OpsMind investigate it.</p>
        </div>
      </div>

      <textarea
        value={errorText}
        onChange={(e) => setErrorText(e.target.value)}
        placeholder="Paste your Docker, Linux, Git, CI/CD, AWS or Kubernetes error here..."
        rows="8"
      />

      <button
        className="analyze-button"
        onClick={analyzeError}
        disabled={analyzing}
      >
        {analyzing ? "🔄 Analyzing..." : "🔍 Analyze Error"}
      </button>

      {result && (
        <div className="analyzer-result">
          <pre>{result}</pre>
        </div>
      )}
    </section>
  );
}

export default ErrorAnalyzer;