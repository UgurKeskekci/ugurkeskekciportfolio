import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <div className="timeline-content">
            <h3>Frontend Developer - Opticoms</h3>
            <p>Munich, Germany | 10/2023 - Current</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <div className="timeline-content">
            <h3>Frontend Developer, Intern - Opticoms</h3>
            <p>Munich, Germany | 07/2023 - 09/2023</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <div className="timeline-content">
            <h3>Frontend Developer, Intern - Cerebrum Tech</h3>
            <p>Ankara, Turkey | 02/2023 - 05/2023</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <div className="timeline-content">
            <h3>Work and Travel Student - Lagoon Amusement Park</h3>
            <p>Utah, United States | 06/2022 - 09/2022</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <div className="timeline-content">
            <h3>Software Engineer, Intern - TrioSoft Bilişim Teknolojileri</h3>
            <p>Istanbul, Turkey | 06/2022 - 07/2022</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
