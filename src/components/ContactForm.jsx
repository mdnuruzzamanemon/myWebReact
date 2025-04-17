import React from 'react';
import '../css/ContactForm.css';
import profileImage from '../images/emon.png'; // Replace with your local image or URL

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-image">
        <img src={profileImage} alt="contact profile" />
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Name*" />
        <input type="email" placeholder="Email ID*" />
        <textarea placeholder="Message*" rows="5" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
