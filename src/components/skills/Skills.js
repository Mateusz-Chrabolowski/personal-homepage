import Container from "../layout/Container";
import Card from "../ui/Card";
import "./Skills.css";

function Skills() {
  return (
    <section className="skills">
      <Container>
        <Card>
          <h2 className="skills__title">
            My skillset includes <span className="skills__icon">⚡</span>
          </h2>

          <ul className="skills__list">
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Git</li>
            <li>Responsive Web Design</li>
            <li>REST API</li>
            <li>Basics of TypeScript</li>
          </ul>
        </Card>
      </Container>
    </section>
  );
}

export default Skills;
