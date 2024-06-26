import React, { useEffect } from 'react';
import './Experience.css';


import cereLogo from '../assets/images/experienceLogo/cerelogo.png';
import optiLogo from '../assets/images/experienceLogo/optilogo.png';
import trioLogo from '../assets/images/experienceLogo/triologo.png';
import laglogo from '../assets/images/experienceLogo/laglogo.png';


const Experience = () => {
  useEffect(() => {
    const items = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
    items.forEach(item => {
      observer.observe(item);
    });
  }, []);

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon"><img src={optiLogo} alt="Opticoms Logo" /></div>
          <div className="timeline-content">
            <h3>Frontend Developer</h3>
            <p>Opticoms</p>
            <p>Munich, Germany | 10/2023 - Present</p>
           
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon"><img src={optiLogo} alt="Opticoms Logo" /></div>
          <div className="timeline-content">
            <h3>Frontend Developer, Intern</h3>
            <p>Opticoms</p>
            <p>Munich, Germany | 07/2023 - 09/2023</p>
            
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon"><img src={cereLogo} alt="Cerebrum Tech Logo" /></div>
          <div className="timeline-content">
            <h3>Frontend Developer, Intern</h3>
            <p>Cerebrum Tech</p>
            <p>Ankara, Turkey | 02/2023 - 05/2023</p>
           
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon"><img src={laglogo} alt="TrioSoft Logo" /></div>
          <div className="timeline-content">
            <h3>Work And Travel</h3>
            <p>Lagoon Amusement Park · Exchange Program</p>
            <p>Utah, United States | 06/2022 - 09/2022</p>
           
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon"><img src={trioLogo} alt="TrioSoft Logo" /></div>
          <div className="timeline-content">
            <h3>Software Engineer, Intern</h3>
            <p>TrioSoft Bilişim Teknolojileri</p>
            <p>Istanbul, Turkey | 06/2022 - 07/2022</p>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
