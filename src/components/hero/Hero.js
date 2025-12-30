import Container from "../layout/Container";
import HireMeButton from "../ui/HireMeButton";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <Container>
        <div className="hero__content">
          <img
            src="/avatar.jpg"
            alt="Krzysiek Dąbrowski"
            className="hero__avatar"
          />

          <div className="hero__text">
            <p className="hero__label">THIS IS</p>

            <h1 className="hero__name">Krzysiek Dąbrowski</h1>

            <p className="hero__desc">
              I’m a passionate Frontend Developer in love with React,
              currently looking for new job opportunities.
            </p>

            <HireMeButton />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
