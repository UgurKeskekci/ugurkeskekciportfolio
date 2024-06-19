import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Copyright © 2024. All rights are reserved</p>
      <div className="social-icons">
        <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com"><i className="fab fa-github"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
