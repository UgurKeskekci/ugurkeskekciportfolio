import React from 'react';
import './About.css';
import deskImage from '../assets/images/desk.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="content">
        <h2>About Me</h2>
        <p>Hey, my name is Uğur, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users. My main stack currently is React.js in combination with Tailwind CSS and TypeScript.</p>
      </div>
      <div className="image">
        <img src={deskImage} alt="Desk" />
      </div>
    </section>
  );
};

export default About;
