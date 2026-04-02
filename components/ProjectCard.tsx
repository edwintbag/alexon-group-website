import type { ProjectItem } from "../lib/data";

interface ProjectCardProps {
  project: ProjectItem;
  alwaysShowOverlay?: boolean;
}

const statusStyle = (status: ProjectItem["status"]) => {
  const base: React.CSSProperties = {
    position: "absolute",
    top: 16,
    right: 16,
    padding: "4px 12px",
    fontSize: 10,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    fontWeight: 600,
  };
  if (status === "Completed")
    return {
      ...base,
      background: "rgba(10,10,10,0.85)",
      border: "1px solid rgba(201,168,76,0.4)",
      color: "var(--gold)",
    };
  if (status === "Ongoing")
    return {
      ...base,
      background: "rgba(123,28,44,0.9)",
      border: "1px solid var(--burg)",
      color: "#FFA0A0",
    };
  return {
    ...base,
    background: "rgba(201,168,76,0.2)",
    border: "1px solid var(--gold)",
    color: "var(--gold)",
  };
};

export default function ProjectCard({
  project,
  alwaysShowOverlay = false,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <img src={project.img} alt={project.title} />
      <div
        className="project-overlay"
        style={alwaysShowOverlay ? { opacity: 1 } : undefined}
      />
      <div style={statusStyle(project.status)}>{project.status}</div>
      <div
        className="project-content"
        style={alwaysShowOverlay ? { transform: "none" } : undefined}
      >
        <div className="project-tag">{project.tag}</div>
        <div className="project-title">{project.title}</div>
      </div>
    </div>
  );
}
