import Container from "../layout/Container";
import Card from "../ui/Card";
import "./Learning.css";

function Learning() {
  return (
    <section className="learning">
      <Container>
        <Card>
          <h2 className="learning__title">
            What I want to learn next <span className="learning__icon">🚀</span>
          </h2>

          <ul className="learning__list">
            <li>TypeScript</li>
            <li>Testing (Jest, React Testing Library)</li>
            <li>Node.js</li>
            <li>Backend fundamentals</li>
          </ul>
        </Card>
      </Container>
    </section>
  );
}

export default Learning;
