import './MySoftware.css';
import { useEffect } from 'react';

function MySoftware() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.2 });

    const items = document.querySelectorAll('.software-card');
    items.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const tools = [
    { name: "Adobe Illustrator", img: "/images/adobe_software.png", class: "glow-purple" },
    { name: "Laravel / Coding", img: "/images/laravel_img.png", class: "glow-emerald" },
    { name: "Figma", img: "/images/figma_img.png", class: "glow-purple" }
  ];

  return (
    <div className='my-software-body py-5' id="my-software">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className='fw-bolder text-white display-5'>
            My <span className="text-emerald">Software</span> Stack
          </h2>
          <div className="accent-bar mx-auto"></div>
        </div>

        <div className='row g-4 justify-content-center'>
          {tools.map((tool, index) => (
            <div className='col-6 col-md-4 col-lg-3' key={index}>
              <div className={`software-card ${tool.class}`}>
                <div className='software-icon-wrapper'>
                  <img src={tool.img} alt={tool.name} className='software-img' />
                </div>
                <h6 className='software-title mt-3'>{tool.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MySoftware;