function ProjectCard({ title, description, tech, demo, code }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>

      <p className="project-card__desc">{description}</p>

      <span className="project-card__tech">{tech}</span>

      <div className="project-card__links">
        <a href={demo} target="_blank" rel="noreferrer">
          Demo
        </a>
        <a href={code} target="_blank" rel="noreferrer">
          Code
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
