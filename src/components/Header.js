import React, { useState } from 'react';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // Ensure react-icons is installed

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <h1>Ugur.dev</h1>
        <ul className={`nav-links ${isMobileMenuOpen ? 'nav-active' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="hamburger" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
