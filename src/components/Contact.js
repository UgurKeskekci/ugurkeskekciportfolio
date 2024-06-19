import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>Any question? Hit me up! 👇</p>
      <div className="contact-details">
        <div>
          <i className="fas fa-map-marker-alt"></i>
          <p>Ankara, Turkey</p>
        </div>
        <div>
          <i className="fas fa-envelope"></i>
          <p>ugur.keskekci@hotmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
