function DevOpsModes({ selectedMode, setSelectedMode }) {
  const modes = [
    {
      id: "docker",
      icon: "🐳",
      name: "Docker",
      description: "Containers & images",
    },
    {
      id: "linux",
      icon: "🐧",
      name: "Linux",
      description: "Commands & troubleshooting",
    },
    {
      id: "git",
      icon: "🔀",
      name: "Git",
      description: "Git & GitHub",
    },
    {
      id: "cicd",
      icon: "⚙️",
      name: "CI/CD",
      description: "Pipelines & automation",
    },
    {
      id: "aws",
      icon: "☁️",
      name: "AWS",
      description: "Cloud & infrastructure",
    },
    {
      id: "kubernetes",
      icon: "☸️",
      name: "Kubernetes",
      description: "Clusters & deployments",
    },
  ];

  return (
    <section className="devops-modes">
      <div className="modes-heading">
        <h2>What do you need help with?</h2>
        <p>Select a DevOps area to focus OpsMind.</p>
      </div>

      <div className="modes-grid">
        {modes.map((mode) => (
          <button
            key={mode.id}
            className={`mode-card ${
              selectedMode === mode.id ? "active" : ""
            }`}
            onClick={() => setSelectedMode(mode.id)}
          >
            <span className="mode-icon">{mode.icon}</span>

            <span className="mode-info">
              <strong>{mode.name}</strong>
              <small>{mode.description}</small>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default DevOpsModes;