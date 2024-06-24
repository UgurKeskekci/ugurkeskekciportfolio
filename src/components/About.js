import React from "react";
import "./About.css";
import deskImage from "../assets/images/desk.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="content">
        <h2>About Me</h2>
        <p>
          Hello, I'm Uğur, a passionate Frontend Developer. I graduated from
          Bilkent University with a degree in Computer Technology and
          Information Systems (CTIS). I am fluent in English and currently
          specialize in developing software using React and React Native. I
          thrive on creating clean, efficient, and user-friendly interfaces to
          enhance the user experience.
        </p>
       
      </div>
      <div className="image">
        <img src={deskImage} alt="Desk" />
      </div>
    </section>
  );
};

export default About;
