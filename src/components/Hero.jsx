import React from 'react';
import './Hero.css';
import { Typewriter } from "react-simple-typewriter";
import AnimateName from './AnimateName';

const Hero = () => {

  const scrollToHome = () => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToAboutMe = () => {
    document.getElementById('about-me')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMySkill = () => {
    document.getElementById('my-skill')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact-me')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className='d-flex flex-column w-100 h-100'>
          <div className="navbar-body">
            <nav className="navbar navbar-expand-lg px-4 px-md-5">
              <div className="container-fluid">
                <a className="navbar-brand text-white fw-bold fs-1 fst-italic logo-text" href="#">
                  Pell.CO
                </a>

                {/* Toggler for mobile */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar links */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                  <ul className="navbar-nav mb-2 mb-lg-0 text-center text-lg-end">
                    <li className="nav-item">
                      <button className="nav-link btn text-white" onclick={scrollToHome}>
                        Home
                      </button>
                    </li>
                    <li className="nav-item">
                      <button className="nav-link btn text-white" onClick={scrollToAboutMe}>
                        About Me
                      </button>
                    </li>
                    <li className="nav-item">
                      <button className="nav-link btn text-white" onClick={scrollToMySkill}>
                        My Skill
                      </button>
                    </li>
                    <li className='nav-item'>
                      <button className='btn-navbar' onClick={scrollToContact}>Hire Me</button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="hero-content container">
            <div className="row align-items-center w-100 flex-column-reverse flex-md-row">

              {/* TEXT */}
              <div className="col-12 col-md-8 text-center text-md-start d-flex flex-column justify-content-center">
                <h1 className="hero-title">
                  I’m <AnimateName />,
                </h1>

                <p className="hero-desc">
                  <Typewriter
                    words={[
                      "Laravel Developer",
                      "React Developer",
                      "Full Stack Developer",
                    ]}
                    loop={0}               // infinite
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={40}
                    delaySpeed={1500}
                  />
                </p>

                <div className="d-flex justify-content-center justify-content-md-start">
                  <button className="cta-button" onClick={scrollToAboutMe}>
                    Get Started
                  </button>
                </div>
              </div>

              {/* IMAGE */}
              <div className="col-12 col-md-4 hero-img text-center mb-4 mb-md-0">
                <img
                  src="/images/image-hero.png"
                  alt="Hero"
                  className="img-fluid"
                />
              </div>

            </div>
          </div>
      </div>
    </section>
  );
};

export default Hero;
