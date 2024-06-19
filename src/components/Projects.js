import React from "react";
import "./Projects.css";
import fitnessVideo from "../assets/images/fitnessVideo.gif";
import devpageVideo from "../assets/images/devpageVideo.gif";
import netopsightVideo from "../assets/images/netopsightVideo.gif";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="myProjects">
        <div className="descriptionContainer">
          <div>
            <p> Personal trainer website showcasing skills,
              programs, coaching options, and professional journey.  <span> Built with React and Tailwind CSS.</span> </p>
          </div>
          <div>
            <img src={fitnessVideo} alt="Desk" />
          </div>
        </div>
        <div className="descriptionContainer" >
          <div >
            <p>
              This project is a dashboard website that track data with graphs, tables and charts.{" "}
              <span> Built with React and Prime React.</span> 
            </p>
          </div>
          <div>
            <img src={netopsightVideo} alt="Desk" />
          </div>
        </div>
        <div className="descriptionContainer" >
          <div >
            <p>
              This project is a personal portfolio website showcasing skills,
              projects, and professional journey.{" "}
              <span> Built with React and Tailwind CSS.</span> 
            </p>
          </div>
          <div>
            <img src={devpageVideo} alt="Desk" />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
