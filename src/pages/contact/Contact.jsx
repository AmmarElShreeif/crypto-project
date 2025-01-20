import { useState } from "react";
import Lottie from "lottie-react";
import contact from "../../animation/contact.json";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setIsSubmitted(true);
  };

  return (
    <section className="contact-us">
      <h2 className="heading">Contact Us</h2>
      <div className="contact">
        <div className="contact-container">
          {isSubmitted ? (
            <p className="success-message">
              Thank you! Your message has been sent.
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button type="submit">Send Message</button>
            </form>
          )}
        </div>
        <div className="animation">
          <Lottie
            className=""
            loop={true}
            autoplay={true}
            style={{ width: 400, height: 400 }}
            animationData={contact}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
