import "./Learning.css";

function Learning() {
  return (
    <section className="learning">
      <div className="container">
        <h2 className="learning__title">
          What I want to learn next <span>🚀</span>
        </h2>

        <div className="learning__divider" />

        <div className="learning__grid">
          <ul>
            <li>React Context</li>
            <li>Node.js</li>
          </ul>

          <ul>
            <li>Cypress</li>
            <li>Unit testing</li>
          </ul>

          <ul>
            <li>TypeScript</li>
            <li>JS classes</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Learning;
