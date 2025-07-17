import React from 'react';
import { useState, useEffect } from 'react';
import '../css/ContactForm.css';
import profileImage from '../images/emon.png'; // Replace with your local image or URL
import ContactAnimaiton from "./animations/ContactAnimation";

function ProgressBar({ progress }) {
  return (
    <div className="progress-bar">
      <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
    </div>
  );
}

const ContactForm = () => {
  const [progress, setProgress] = useState(0);
    useEffect(() => {
      setTimeout(() => {
        setProgress(50);
      }, 100);
    }, []);

  return (
    <>
    <div className="container">
    <h3 className='contactHeading'>Contact Me</h3>
        <div className="progressBox mb-5">
          <ProgressBar progress={progress} />
        </div>
        </div>
    <div className="contact-container">
     
      

      <div className="contact-image">
        {/* <img src={profileImage} alt="contact profile" /> */}
        <ContactAnimaiton />
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Name*" />
        <input type="email" placeholder="Email Address*" />
        <textarea placeholder="Message*" rows="5" />
        <button type="submit">Send</button>
      </form>
      </div>
  </>
  );
};

export default ContactForm;
