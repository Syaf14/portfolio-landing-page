import './Portfolio.css';

function Portfolio()
{
    return (
        <div className="py-5" style={{background:'#202A66',paddingLeft: '80px',paddingRight:'80px'}} id='portfolio'>
            <h2 style={{fontSize:'40px'}} className="text-center text-white fw-bolder">Portfolio</h2>
        <div className="d-flex justify-content-center" style={{ minHeight: "400px" }}>
            <div className="col-md-10 d-flex justify-content-evenly align-items-center img-portfolio flex-wrap gap-4">
                
                <div className="portfolio-item text-center">
                <img
                    src="/portfolio.png"
                    alt="Portfolio"
                    className="img-fluid portfolio-img"
                />
                <a className="btn-portfolio mt-3">Developer Coding</a>
                </div>

                <div className="portfolio-item text-center">
                <img
                    src="/portfolio.png"
                    alt="Portfolio"
                    className="img-fluid portfolio-img"
                />
                <a className="btn-portfolio mt-3">Graphic Design</a>
                </div>

                <div className="portfolio-item text-center">
                <img
                    src="/portfolio.png"
                    alt="Portfolio"
                    className="img-fluid portfolio-img"
                />
                <a className="btn-portfolio mt-3">Web Design</a>
                </div>

            </div>
        </div>

        </div>
    )
}

export default Portfolio;