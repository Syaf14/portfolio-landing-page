import './AboutMe.css';
import { useEffect } from 'react';

function AboutMe() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    const faders = document.querySelectorAll('.fade-in-element');
    faders.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-me" id='about-me'>
      <div className="container">
        <div className="section-header text-center fade-in-element">
          <h2 className='fw-bold display-4'>About <span className="text-emerald">Me</span></h2>
          <div className="header-line mx-auto"></div>
        </div>

        <div className="row mt-5 align-items-center">
          {/* Image Column */}
          <div className="col-lg-5 mb-4 mb-lg-0 fade-in-element">
            <div className="about-image-wrapper">
              <img src="/images/resume_picture.png" alt="Pell Co" className="img-fluid rounded-4" />
              <div className="image-overlay-glow"></div>
            </div>
          </div>

          {/* Details Column */}
          <div className="col-lg-7">
            <div className="about-grid">
              {/* Full Name & Job */}
              <div className='info-card full-width fade-in-element'>
                <div className='card-icon'><i className="bi bi-person-vcard"></i></div>
                <div>
                  <label>Name & Occupation</label>
                  <p className="highlight-text">Wan Mohammad Syafrul Aiman | 24</p>
                  <p className="sub-text">IT Executive @ Opensoft Technologies SDN BHD</p>
                </div>
              </div>

              {/* Contact Info Group */}
              <div className="info-row">
                <div className='info-card fade-in-element'>
                  <label><i className="bi bi-telephone-fill me-2"></i>Phone</label>
                  <p>+6017 289 2440</p>
                </div>
                <div className='info-card fade-in-element'>
                  <label><i className="bi bi-envelope-at-fill me-2"></i>Email</label>
                  <p>syafaiman0135@gmail.com</p>
                </div>
              </div>

              {/* Socials & Project */}
              <div className="info-row">
                <div className='info-card fade-in-element'>
                  <label>Social Media</label>
                  <div className="social-links">
                    <span><i className="bi bi-instagram"></i> aimansanusi14</span>
                    <span><i className="bi bi-tiktok"></i> Pell Co</span>
                  </div>
                </div>
                <div className='info-card border-purple fade-in-element'>
                  <label className="text-purple">Freelance Specialist</label>
                  <p>Landing Page Expert & Full Stack Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;