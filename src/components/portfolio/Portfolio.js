import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import "./Portfolio.css";

function Portfolio() {
  const [state, setState] = useState("loading"); // loading | success | error
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Mateusz-Chrabolowski/repos")
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        // bierzemy tylko te projekty które faktycznie chcesz pokazać
        const wanted = [
          "currency-converter",
          "currency-converter-react",
          "to-do-list",
          "todo-list-react",
        ];

        const filtered = data.filter((repo) =>
          wanted.includes(repo.name)
        );

        setProjects(filtered);
        setState("success");
      })
      .catch(() => setState("error"));
  }, []);

  return (
    <section className="portfolio">
      <div className="container">
        <div className="portfolio__header">
          <div className="portfolio__icon">
            <FaGithub size={32} />
          </div>
          <h2>Portfolio</h2>
          <p>My recent projects</p>
        </div>

        {/* LOADING */}
        {state === "loading" && (
          <div className="portfolio__loading">
            <p>Please wait, projects are being loaded...</p>
            <div className="spinner" />
          </div>
        )}

        {/* ERROR */}
        {state === "error" && (
  <div className="portfolio__error">
    <div className="portfolio__errorIcon">⚠️</div>

    <h3>Ooops! Something went wrong...</h3>

    <p>
      Sorry, failed to load Github projects.
      <br />
      You can check them directly on Github.
    </p>

    <a
      href="https://github.com/Mateusz-Chrabolowski"
      target="_blank"
      rel="noreferrer"
      className="btn btn--primary"
    >
      Go to Github
    </a>
  </div>
)}


        {/* SUCCESS */}
        {state === "success" && (
          <div className="portfolio__grid">
            {projects.map((project) => (
              <div className="project" key={project.id}>
                <h3>{project.name}</h3>

                <p>
                  {project.description ||
                    "Project description, e.g. website where you can search for favourite movies and people."}
                </p>

                <div className="project__links">
                  <a
                    href={project.homepage || project.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
