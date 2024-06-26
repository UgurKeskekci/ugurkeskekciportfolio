import React from 'react';
import './Footer.css';
import ugurLogo from '../assets/images/ugurlogo.png';

const Footer = () => {
  return (
    <footer className="footer">
     
      <img className='ugurlogo' src={ugurLogo} alt="Ugur Logo" />
      <p>Copyright © 2024. All rights are reserved</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/u%C4%9Fur-ke%C5%9Fkekci-3518001a2/"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/UgurKeskekci"><i className="fab fa-github"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
