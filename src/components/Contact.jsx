import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_yyt1cmg", "template_2l1ekjt", form.current, {
        publicKey: "FLdNpq97zr-4zpuSs",
      })
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
    console.log("Form data submitted:", formData);
  };

  return (
    <div  id="contact" className="contact">
      <form ref={form} className="contact-form" onSubmit={handleSubmit}>
        <h3>Let us talk!</h3>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send email</button>
      </form>

      <div className="contact-info">
        <h3>Contact Information</h3>
        <div className="info-item">
          <i className="fa-solid fa-location-dot"></i>
          <div>
            <p>Rizal San Carlos City</p>
            <p>Pangasinan, Philippines</p>
            <p>2420</p>
          </div>
        </div>
        <div className="info-item">
          <i className="fa-solid fa-envelope"></i>
          <p>emiljasondatuin@gmail.com</p>
          <a href="mailto:emiljasondatuin@gmail.com">Send email</a>
        </div>
        <div className="info-item">
          <i className="fa-solid fa-phone"></i>
          <p>+639498602708</p>
          <a href="tel:+639498602708">Call me</a>
        </div>
        <div className="socials">
          <div className="info-item">
            <a href="https://www.linkedin.com/in/emil-jason-datuin-3b169b176">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div className="info-item">
            <a href="https://github.com/EmilJason" >
              <i className="fa-brands fa-github-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
