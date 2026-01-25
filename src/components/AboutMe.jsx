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
                    <h2 className='header-about-me'>Wan Mohammad Syafrul Aiman | 24</h2>
                    <p className='statement-about-me'>
                        I’m a full-time developer at <span className='comp-text fw-bold fst-italic m-0 p-0' style={{fontSize:"12px"}}>OpenSoft Technologies Sdn Bhd</span> and 
                        a freelance landing page specialist. I enjoy combining logic and creativity
                        to transform ideas into functional, visually appealing products.
                        <br/>
                        My experience spans web development, UI/UX design, and branding. I’m constantly learning
                        new technologies and improving my skills to deliver modern, responsive, and efficient solutions.
                    </p>
                    <div className='row'>
                        <label className='label-text col-md-3 fs-5 fw-bolder'>Phone No:</label>
                        <p className='col-md-1 fw-bolder'>:</p>
                        <p className='p-text col-md-8 fs-5 fst-italic'>+6017-289 2440</p>
                    </div>
                    <div className='row'>
                        <label className='label-text col-md-3 fs-5 fw-bolder'>Email:</label>
                        <p className='col-md-1 fw-bolder'>:</p>
                        <p className='p-text-email col-md-8 fs-5 fst-italic'>syafaiman0135@gmail.com</p>
                    </div>
                    <div className='row'>
                        <label className='label-text col-md-3 fs-5 fw-bolder'>Address:</label>
                        <p className='col-md-1 fw-bolder'>:</p>
                        <p className='p-text col-md-8 fs-5 fst-italic'>Sungai Ramal, Kajang, Selangor</p>
                    </div>
                    <div className='row'>
                        <label className='label-text col-md-3 fs-5 fw-bolder'>Country:</label>
                        <p className='col-md-1 fw-bolder'>:</p>
                        <p className='p-text col-md-8 fs-5 fst-italic'>Malaysia</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;