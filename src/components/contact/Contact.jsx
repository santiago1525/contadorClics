import "./Contact.css";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contacto</h1>
      <div className="contact-links">
        <a
          href="#"
          className="contact email"
          target={"blank"}
        >
          <BsFillEnvelopeFill className="icon" />
          <h2>
            email <span></span>
          </h2>
        </a>

        <a
          href="#"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            Whatsapp <span></span>
          </h2>
        </a>

        <a href="https://www.linkedin.com/in/santiago-chac%C3%B3n-703573223/" className="contact linkedin">
          <BsLinkedin className="icon" />
          <h2>
            Linkedin <span></span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;