import React from 'react';
import './Hero.css';
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    const menu = document.getElementById('navContent');
    if (menu?.classList.contains('show')) menu.classList.remove('show');
  };

  return (
    <section className="hero" id="hero">
      <nav className="navbar navbar-expand-lg fixed-top custom-nav">
        <div className="container">
          <a className="navbar-brand logo-text" href="#hero">
            PELL<span className="accent-text">.</span>CO
          </a>
          <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navContent">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item"><button className="nav-link-custom" onClick={() => scrollToSection('hero')}>Home</button></li>
              <li className="nav-item"><button className="nav-link-custom" onClick={() => scrollToSection('about-me')}>About</button></li>
              <li className="nav-item"><button className="nav-link-custom" onClick={() => scrollToSection('my-skill')}>Skills</button></li>
              <li className="nav-item ms-lg-3">
                <button className="btn-hire-neon" onClick={() => scrollToSection('contact-me')}>Hire Me</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container hero-container d-flex align-items-center justify-content-center">
        <div className="row w-100 justify-content-center">
          <div className="col-lg-10 text-center text-lg-start">
            <div className="badge-emerald mb-3">
              <span className="pulse-emerald"></span> 
              <span className="badge-text">Innovating the Web</span>
            </div>
            
            <h1 className="hero-title">
              I’m <span className="gradient-text">Pell Co.Dev</span>
            </h1>
            
            <div className="typewriter-container">
              <span className="hero-desc">
                <Typewriter
                  words={["Laravel Developer", "React Developer", "UI/UX Enthusiast"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </div>

            <p className="hero-subtext mx-auto mx-lg-0 mt-4 mb-5">
              Transforming complex ideas into <span className="text-emerald">minimalist interfaces</span> with a <span className="text-purple">creative edge</span>. I build high-converting landing pages where clean code meets striking design.
            </p>

            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3 mt-5">
              <button className="btn-emerald" onClick={() => scrollToSection('about-me')}>Explore Projects</button>
              <button className="btn-outline-purple" onClick={() => scrollToSection('contact-me')}>Get In Touch</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="scroll-indicator" onClick={() => scrollToSection('about-me')}>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;