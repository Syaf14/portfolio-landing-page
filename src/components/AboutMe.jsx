import './AboutMe.css';

function AboutMe() {
    return (
        <section className="about-me" id='about-me' >
            <h2 className='fw-bolder'>About Me</h2>
            <div className="about-me-content">
                <div className="about-me-img">
                    <img src="/images/owner-img.jpg" alt="About me" />
                </div>

                <div className="about-me-text">
                    <h2>Wan Mohammad Syafrul Aiman | 24</h2>
                    <p>
                        I’m a full-time developer at OpenSoft Technologies Sdn Bhd and 
                        a freelance landing page specialist. I enjoy combining logic and creativity
                        to transform ideas into functional, visually appealing products.
                    </p>
                    <p>
                        My experience spans web development, UI/UX design, and branding. I’m constantly learning
                        new technologies and improving my skills to deliver modern, responsive, and efficient solutions.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;