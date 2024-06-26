import React, { useEffect } from "react";
import "./Projects.css";
import fitnessVideo from "../assets/images/fitnessVideo.gif";
import devpageVideo from "../assets/images/devpageVideo.gif";
import netopsightVideo from "../assets/images/netopsightVideo.gif";
import cermodernVideo from "../assets/images/cermodernVideo.gif";
import epicekVideo from "../assets/images/epicekVideo.gif";
import piclinkPoster from "../assets/images/piclinkPoster.jpeg";

const Projects = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".project");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    items.forEach((item) => {
      observer.observe(item);
    });
  }, []);

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="myProjects">
        <div className="project">
          <div className="description">
            <p>
              Developed a mobile application using{" "}
              <span>React Native, Expo CLI and Firebase</span>, enabling users
              to share photos at events via QR codes, enhancing event
              experiences with effortless photo sharing.
            </p>
          </div>
          <div className="image">
            <img src={piclinkPoster} alt="Fitness Website" />
          </div>
        </div>
        <div className="project reverse">
          <div className="description">
            <p>
              Created a website for CermoDern Gallery using{" "}
              <span>JavaScript, React, and Tailwind CSS</span>, enabling gallery
              to share their art, event details, tickets, and calender.
            </p>
          </div>
          <div className="image">
            <img src={cermodernVideo} alt="Dashboard Website" />
          </div>
        </div>
        <div className="project">
          <div className="description">
            <p>
              Personal trainer website showcasing skills, programs, coaching
              options, and professional journey.{" "}
              <span>Built with React and Tailwind CSS.</span>
            </p>
          </div>
          <div className="image">
            <img src={fitnessVideo} alt="Fitness Website" />
          </div>
        </div>
        <div className="project reverse">
          <div className="description">
            <p>
              Developed a dashboard website that tracks data with graphs,
              tables, and charts. <span>Built with React and Prime React.</span>
            </p>
          </div>
          <div className="image">
            <img src={netopsightVideo} alt="Dashboard Website" />
          </div>
        </div>
        <div className="project">
          <div className="description">
            <p>
              Created a personal portfolio website showcasing skills, projects,
              and professional journey.{" "}
              <span>Built with React and Tailwind CSS.</span>
            </p>
          </div>
          <div className="image">
            <img src={devpageVideo} alt="Portfolio Website" />
          </div>
        </div>
        <div className="project reverse">
          <div className="description">
            <p>
              Created a comprehensive mobile app and website using{" "}
              <span>React and React Native</span>, facilitating communication
              and photo sharing between doctors and patients, thereby improving
              patient care.
            </p>
          </div>
          <div className="epicekImage">
            <img
              className="epicekImage"
              src={epicekVideo}
              alt="Dashboard Website"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
