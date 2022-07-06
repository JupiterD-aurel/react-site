import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { TiSocialGithub } from "react-icons/ti";
import {BsLinkedin} from "react-icons/bs"

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        C'est tout{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - Monter -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="https://www.instagram.com/jupiter_aurel_/?hl=fr">
          <BsInstagram className="social" />
        </a>

        <a href="https://github.com/JupiterD-aurel">
          <TiSocialGithub className="social" />
        </a>
        <a href="https://www.linkedin.com/in/dhan-aurel-boudoh-3709b9203/">
          <BsLinkedin className="social" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
