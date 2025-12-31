import "./Skills.css";

function Skills() {
  return (
    <section className="skills">
      <div className="container">
        <div className="skills__card">
          <h2 className="skills__title">
            My skillset includes <span>🛠</span>
          </h2>

          <div className="skills__divider" />

          <div className="skills__grid">
            <ul>
              <li>Semantic & accessible HTML</li>
              <li>Responsive Web Design</li>
              <li>Teamwork</li>
              <li>Markdown</li>
              <li>Immutability</li>
              <li>CSS BEM convention</li>
              <li>CSS Grid</li>
              <li>CSS Flexbox</li>
            </ul>

            <ul>
              <li>React Router</li>
              <li>Redux-Saga</li>
              <li>Redux (Toolkit)</li>
              <li>React Hooks</li>
              <li>Error handling</li>
              <li>Working with API (fetch, axios)</li>
              <li>JavaScript: ES6+</li>
            </ul>

            <ul>
              <li>Promises, Async/Await</li>
              <li>GitHub Pull Requests & Review</li>
              <li>Trello</li>
              <li>Scrum</li>
              <li>NPM</li>
              <li>React</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
