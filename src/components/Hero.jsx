import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToAboutMe = () => {
    document.getElementById('about-me')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section className="hero">
      <div className="hero-content container">
        <div className="row align-items-center flex-column-reverse flex-md-row">

          {/* TEXT */}
          <div className="col-12 col-md-8 text-center text-md-start d-flex flex-column justify-content-center">
            <h1 className="hero-title">
              I’m <span className="hero-name">PELL.CO</span>,
            </h1>

            <p className="hero-desc">
              I design and develop high-performance landing pages focused on conversion, speed, and clean user experience — helping businesses grow through impactful digital presence.
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
    </section>
  );
};

export default Hero;
