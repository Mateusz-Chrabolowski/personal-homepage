import Container from "../layout/Container";
import ProjectCard from "./ProjectCard";
import { projects } from "./projects";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <Container>
        <div className="portfolio__heading">
          <h2 className="portfolio__title">Portfolio</h2>
          <p className="portfolio__subtitle">My recent projects</p>
        </div>

        <div className="portfolio__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Portfolio;
