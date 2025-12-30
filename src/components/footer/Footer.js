import Container from "../layout/Container";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <p className="footer__email">krzysiek@youcode.pl</p>
        <p className="footer__text">
          I’m always open to new projects whenever I have the time.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
