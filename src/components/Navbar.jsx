import './Navbar.css';

function Navbar() {
    const scrollToAboutMe = () => {
        document.getElementById('about-me').scrollIntoView({ 
          behavior: 'smooth', 
        });
      }
    const scrollToMySkill = () => {
        document.getElementById('my-skill').scrollIntoView({ 
          behavior: 'smooth', 
        });
      }
    const scrollToContact = () => {
        document.getElementById('contact-me').scrollIntoView({ 
          behavior: 'smooth', 
        });
      }
    return (
        <div className="navbar-body">
            <nav className="navbar navbar-expand-lg px-5" style={{background:'#11507a'}}>
            <div className="container-fluid">
                <a className="navbar-brand text-white fw-bold fs-1 fst-italic logo-text" href="#">Pell.CO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex justify-content-end collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link text-white" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="btn nav-link text-white" onClick={scrollToAboutMe}>About Me</a>
                    </li>
                    <li className="nav-item">
                    <a className="btn nav-link text-white" onClick={scrollToMySkill}>My Skill</a>
                    </li>
                    <li className="nav-item">
                    <a className="btn nav-link text-white" onClick={scrollToContact}>Contact</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Navbar;