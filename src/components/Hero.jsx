import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToAboutMe = () => {
    document.getElementById('about-me').scrollIntoView({ 
      behavior: 'smooth', 
    });
  }
  return (
    <section className="hero">
      <div className="hero-content">
        <div className='row'>
          <div className='col-md-8 d-flex flex-column justify-content-center'>
            
            <h1 className="hero-title">
              I’m <span className="hero-name">PELL.CO</span>,
            </h1>

            <p className="hero-desc">
              I design and develop high-performance landing pages focused on conversion, speed, and clean user experience — helping businesses grow through impactful digital presence.
            </p>

            <button className="cta-button" onClick={scrollToAboutMe}>
              Get Started
            </button>

          </div>

          <div className='col-md-4 hero-img'>
            <img src="/images/image-hero.png" alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
