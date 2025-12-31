import "./Footer.css";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <h3>LET&apos;S TALK!</h3>

        <a href="mailto:mateusz.chrabolowski@gmail.com" className="footer__email">
          mateusz.chrabolowski@gmail.com
        </a>

        <p>
          I&apos;m always open to new projects whenever I have the time.
        </p>

        <div className="footer__socials">
          <a href="https://github.com/Mateusz-Chrabolowski" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
