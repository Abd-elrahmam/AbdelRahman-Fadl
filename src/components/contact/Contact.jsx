import { useRef } from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const contactData = [
  {
    id: 1,
    icon: <MdOutlineMail />,
    title: "Email",
    info: "abdelrahmanfadl24@gmail.com",
    link: "mailto:abdelrahmanfadl24@gmail.com",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    title: "Messenger",
    info: "Abdelrahman",
    link: "www.linkedin.com/in/abdelrahman-fadl-578351266",
  },
  {
    id: 3,
    icon: <BsWhatsapp />,
    title: "Whatsapp",
    info: "+201021330018",
    link: "https://wa.me/+201021330018",
  },
];
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_kbf2j5q",
      "template_t32qjnl",
      form.current,
      "pZ6_tVji0nxTTJjf8"
    );
    e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <div className="top-section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>
      <div className="container contact_container">
        <div className="contact_options">
          {contactData.map(({ id, icon, title, info, link }) => (
            <article key={id} className="contact_option">
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target="_blank">
                Send Message
              </a>
            </article>
          ))}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Your Full Name" name="name" />
          <input type="email" placeholder="Your Email" name="email" />
          <textarea
            rows={10}
            name="message"
            placeholder="Enter Your Message"
          ></textarea>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
