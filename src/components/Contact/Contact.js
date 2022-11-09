import { useRef } from 'react';
import './Contact.css';
import {MdOutlineMail} from 'react-icons/md';
import {GrLinkedin} from 'react-icons/gr';
import { GoMarkGithub } from 'react-icons/go'
import emailjs from '@emailjs/browser';

  const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
        e.preventDefault()
        const SI = process.env.REACT_APP_SERVICE_ID
        const TI = process.env.REACT_APP_TEMPLATE_ID
        const PK = process.env.REACT_APP_PUBLIC_KEY
        console.log(SI, TI, PK)
        emailjs
          .sendForm(SI, TI, form.current, PK)
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }

  return (
    <section className="contact">
      <div className="contact-intro">
        <h1>Get In Touch!</h1>
        <p>Want to say some kind words? I'm sure we'll get along so let's
          connect on LinkedIn if we're not already! Found a bug in my website and 
          want to show me? Tell me all about it! Anything you want to say 
          at all will be sent to me through email and I will try to respond
          to every comment. The only guarantee I'll give is that the 
          follow up email I'll message back with will not be a generic thank 
          you email. I really appreciate you viewing my website and I'll
          appreciate you even more if you send me a message below.
        </p>
        <p>P.S. There's an easter egg on this website and the only way you 
          can view it is by sending a message below.
        </p>
      </div>
      <div className='contact-container'>
        <div className='contact-options'>
          <article className='contact-option'>
            <MdOutlineMail className='contact-option-icon'/>
            <h4>Email</h4>
            <a href="mailto:mhchrist22@gmail.com" className='contact-option-link' target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className='contact-option'>
            <GrLinkedin className='contact-option-icon'/>
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/maxwellchrist/" className='contact-option-link' target="_blank" rel="noreferrer">Go to profile page</a>
          </article>
          <article className='contact-option'>
            <GoMarkGithub className='contact-option-icon'/>
            <h4>Github</h4>
            <a href="https://github.com/MaxwellChrist" className='contact-option-link' target="_blank" rel="noreferrer">Go to profile page</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your full name' required />
          <input type="email" name="email" placeholder='Your email' required />
          <input placeholder="Subject" type="text" name="subject" required />
          <textarea name="message" rows="10" placeholder="Your message" required />
          <input type="submit" className='btn btn-primary' placeholder="Send Message" value="SEND" />
        </form>
      </div>
    </section>
  )
}

export default Contact