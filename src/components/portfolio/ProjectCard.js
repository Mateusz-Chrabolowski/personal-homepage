import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <article className="projectCard">
      <h3 className="projectCard__title">{project.name}</h3>

      <p className="projectCard__desc">{project.description}</p>

      <span className="projectCard__tag">{project.technology}</span>

      <div className="projectCard__links">
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
        >
          Demo
        </a>
        <a
          href={project.code}
          target="_blank"
          rel="noreferrer"
        >
          Code
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
