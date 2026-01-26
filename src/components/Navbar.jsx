import './Navbar.css';

function Navbar() {
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
  );
}

export default Navbar;
