import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-cyber">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            PELL<span className="text-emerald">.</span>CO
          </div>
          
          <div className="footer-links">
            <a href="#hero">Home</a>
            <a href="#about-me">About</a>
            <a href="#my-skill">Skills</a>
            <a href="#contact-me">Contact</a>
          </div>

          <div className="footer-socials">
            <a href="https://instagram.com/aimansanusi14" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
            <a href="https://tiktok.com/@syafrul022" target="_blank" rel="noreferrer"><i className="bi bi-tiktok"></i></a>
            <a href="mailto:syafaiman0135@gmail.com"><i className="bi bi-envelope"></i></a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} <span className="text-white fw-bold">Pell Co. Dev</span>. Built with Passion & Code.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;