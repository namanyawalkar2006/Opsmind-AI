import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function ResponseBox({ response }) {
  const copyCode = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      alert("Copied!");
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <section className="response-box">
      <div className="response-header">
        <div className="ai-icon">✦</div>

        <div>
          <h2>OpsMind AI</h2>
          <span>AI DevOps Assistant</span>
        </div>
      </div>

      <div className="response-content">
        {response ? (
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                const code = String(children).replace(/\n$/, "");

                if (!inline && match) {
                  return (
                    <div className="code-block-wrapper">
                      <div className="code-block-header">
                        <span>{match[1]}</span>

                        <button
                          onClick={() => copyCode(code)}
                          className="copy-button"
                        >
                          📋 Copy
                        </button>
                      </div>

                      <SyntaxHighlighter
                        style={oneDark}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      >
                        {code}
                      </SyntaxHighlighter>
                    </div>
                  );
                }

                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {response}
          </ReactMarkdown>
        ) : (
          <p className="response-placeholder">
            OpsMind is ready. Ask a DevOps question above.
          </p>
        )}
      </div>
    </section>
  );
}

export default ResponseBox;