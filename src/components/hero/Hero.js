import "./Hero.css";
import Container from "../layout/Container";
import HireMeButton from "../ui/HireMeButton";

export default function Hero() {
  return (
    <section className="hero">
      <Container>
        <div className="hero__grid">
          <img
            className="hero__avatar"
            src="/avatar.jpg"
            alt="Mateusz Chrabłowski"
          />

          <div className="hero__content">
            <span className="hero__label">THIS IS</span>
            <h1 className="hero__name">Mateusz Chrabołowski</h1>

            <p className="hero__description">
              I'm a passionate Frontend Developer student in love with creating sites and apps, currently
              looking for new job opportunities.
            </p>

            <HireMeButton />
          </div>
        </div>
      </Container>
    </section>
  );
}
