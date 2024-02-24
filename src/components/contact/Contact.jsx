import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopiedText('Copied!');
        setTimeout(() => {
          setCopiedText('');
        }, 3000); // Set timeout for 3 seconds (3000 milliseconds)
      })
      .catch((err) => {
        console.error('Error copying to clipboard: ', err);
      });
  };

  return (
    <section className="contact section" id="contact">
      <span className="section-subtitle">
        Click it to copy the details! <span className="copied-text">{copiedText}</span>
      </span>
      <h2 className="section-title">Let's Work Together</h2>
      <div className="contact-container container grid">
        <div className="contact-info grid">
          <div className="contact-container-box" onClick={() => copyToClipboard('sudeshnapandey8@gmail.com')}>
            <i className="bx bxl-gmail contact-icon"></i>
            <h3 className="contact-title">Email</h3>
            <span className="contact-subtitle">sudeshnapandey8@gmail.com</span>

          </div>
          <div className="contact-container-box" onClick={() => copyToClipboard('+977 9860902072')}>
            <i className="bx bx-mobile-alt contact-icon"></i>
            <h3 className="contact-title">Mobile</h3>
            <span className="contact-subtitle">+977 9860902072</span>
          </div>
          <div className="contact-container-box" onClick={() => copyToClipboard('Kathmandu, Nepal')}>
            <i className="bx bx-map contact-icon"></i>
            <h3 className="contact-title">Address</h3>
            <span className="contact-subtitle">Kathmandu, Nepal</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
