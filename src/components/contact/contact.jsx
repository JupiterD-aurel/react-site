import "./contact.css";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Me contacter</h1>
      <div className="contact-links">
        <a
          href="https://github.com/JupiterD-aurel"
          className="contact Github"
          target={"blank"}
        >
          <AiOutlineGithub className="icon" />
          <h2>
            Github <span>Jupiter D-Aurel</span>
          </h2>
        </a>
        <a
          href="#"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+33 6 05 95 28 70</span>
          </h2>
        </a>

        <a href="https://www.linkedin.com/in/dhan-aurel-boudoh-3709b9203/" className="contact instagram">
          <BsLinkedin className="icon" />
          <h2>
            Linkedin <span>Dhan-aurel BOUDOH</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
