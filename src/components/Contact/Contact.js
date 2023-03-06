import { useRef } from "react";
import "./Contact.css";
import { MdOutlineMail } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";
import { GoMarkGithub } from "react-icons/go";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const SI = process.env.REACT_APP_SERVICE_ID;
    const TI = process.env.REACT_APP_TEMPLATE_ID;
    const PK = process.env.REACT_APP_PUBLIC_KEY;
    emailjs.sendForm(SI, TI, form.current, PK).then(
      () => {
        alert("Message successfully sent!");
        window.location.reload(false);
      },
      () => {
        alert("Failed to send the message, please try again");
      }
    );
  };

  function toggleEmail() {
    window.location.assign("mailto:mhchrist22@gmail.com");
  }

  function toggleLinkedIn() {
    window.location.href = 'https://www.linkedin.com/in/maxwellchrist/';
  }

  function toggleGithub() {
    window.location.href = 'https://github.com/MaxwellChrist';
  }


  return (
    <section className="contact">
      <div className="contact-intro">
        <h1>Get In Touch!</h1>
        <p>
          Anything you want to say at all will be sent to my personal email and
          I will try to respond to every comment. I really appreciate you
          viewing my website and I'll appreciate you even more if you send me a
          message below.
        </p>
      </div>
      <div className="contact-container">
        <div className="contact-options">
          <article className="contact-option" onClick={toggleEmail}>
            <MdOutlineMail className="contact-option-icon" />
            <h4>Email</h4>
            <p className="contact-option-link">Go to profile page</p>
          </article>
          <article className="contact-option" onClick={toggleLinkedIn}>
            <GrLinkedin className="contact-option-icon" />
            <h4>LinkedIn</h4>
            <p className="contact-option-link">Go to profile page</p>
          </article>
          <article className="contact-option" onClick={toggleGithub}>
            <GoMarkGithub className="contact-option-icon" />
            <h4>Github</h4>
            <p className="contact-option-link">Go to profile page</p>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <input placeholder="Subject" type="text" name="subject" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your message"
            required
          />
          <input
            type="submit"
            className="btn btn-primary"
            placeholder="Send Message"
            value="SEND"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
