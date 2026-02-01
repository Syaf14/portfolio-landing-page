import './AboutMe.css';

function AboutMe() {
    return (
        <section className="about-me" id='about-me' >
            <h2 className='fw-bolder'>About Me</h2>
            <div className="about-me-content">
                <div className="about-me-img">
                    <img src="/images/owner-img.jpg" alt="About me" />
                </div>

                <div className="about-me-text col-md-12">
                    {/* <h2 className='header-about-me'>Wan Mohammad Syafrul Aiman | 24</h2>
                    <p className='statement-about-me'>
                        I’m a full-time developer at <span className='comp-text fw-bold fst-italic m-0 p-0' style={{fontSize:"12px"}}>OpenSoft Technologies Sdn Bhd</span> and 
                        a freelance landing page specialist. I enjoy combining logic and creativity
                        to transform ideas into functional, visually appealing products.
                        <br/>
                        My experience spans web development, UI/UX design, and branding. I’m constantly learning
                        new technologies and improving my skills to deliver modern, responsive, and efficient solutions.
                    </p>
                    <div className='row'>
                        <label className='label-text col-md-3 fw-bolder'>Phone No:</label>
                        <p className='col-md-1 fw-bolder'>:</p>
                        <p className='p-text col-md-8 fst-italic'>+6017-289 2440</p>
                    </div>
                    <div className='row'>
                        <label className='label-text col-md-3 fw-bolder'>Email:</label>
                        <p className='col-md-1 fw-bolder'>:</p>
                        <p className='p-text-email col-md-8 fst-italic'>syafaiman0135@gmail.com</p>
                    </div>
                    <div className='row'>
                        <label className='label-text col-md-3 fw-bolder'>Address:</label>
                        <p className='col-md-1 fw-bolder'>:</p>
                        <p className='p-text col-md-8 fst-italic'>Sungai Ramal, Kajang, Selangor</p>
                    </div>
                    <div className='row'>
                        <label className='label-text col-md-3 fw-bolder'>Country:</label>
                        <p className='col-md-1 fw-bolder'>:</p>
                        <p className='p-text col-md-8 fst-italic'>Malaysia</p>
                    </div> */}
                    <div className='card mb-2 border-4'>
                        <div className='card-body'>
                            <label for='about_me_name'>Name | Age:</label>
                            <p>Wan Mohammad Syafrul Aiman Bin Wan Mohd Sanusi | 24</p>
                        </div>
                    </div>
                    <div className='card mb-2 border-4'>
                        <div className='card-body'>
                            <label for='about_me_name'>Occupation:</label>
                            <p>Opensoft Technologies SDN BHD <br />
                            - IT executive
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between'>
                    <div className='card mb-2 border-4 col-md-5'>
                        <div className='card-body'>
                            <label for='about_me_name'>Phone No:</label>
                            <p>+6017 289 2440</p>
                        </div>
                    </div>
                    <div className='card mb-2 border-4 col-md-6'>
                        <div className='card-body'>
                            <label for='about_me_name'>Social Media:</label>
                            <p><i className="bi bi-instagram"></i>/<i class="bi bi-threads"></i> aimansanusi14
                            <br /><i class="bi bi-tiktok"></i> pell.co
                            </p>
                        </div>
                    </div>
                    </div>

                    <div className='card mb-2 border-4'>
                        <div className='card-body'>
                            <label for='about_me_name'>Email:</label>
                            <p>syafaiman0135@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;