function ChatBox({ question, setQuestion, onAsk }) {
  function handleKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      onAsk();
    }
  }

  return (
    <div className="chat-box">
      <textarea
        value={question}
        onChange={(event) => setQuestion(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask anything about DevOps..."
        rows="4"
      />

      <div className="chat-footer">
        <span>Press Enter to ask</span>

        <button onClick={onAsk}>
          Ask OpsMind
          <span>→</span>
        </button>
      </div>
    </div>
  );
}

export default ChatBox;