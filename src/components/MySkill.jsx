import './MySkill.css';

function MySkill() {
  const skills = [
    { name: "Laravel", level: "75%", color: "emerald" },
    { name: "ReactJS", level: "70%", color: "purple" },
    { name: "Figma", level: "50%", color: "emerald" },
    { name: "Adobe After Effects", level: "50%", color: "purple" },
    { name: "Adobe Photoshop", level: "65%", color: "emerald" },
    { name: "Adobe Illustrator", level: "68%", color: "purple" },
  ];

  return (
    <section className='skills-section py-5' id='my-skill'>
      <div className='container'>
        <div className="text-center mb-5">
          <h2 className='fw-bold display-5 text-white'>
            Technical <span className="text-emerald">Expertise</span>
          </h2>
          <p className="text-gray">Tools and technologies I use to bring ideas to life.</p>
        </div>

        <div className='row g-4'>
          {skills.map((skill, index) => (
            <div className='col-md-6' key={index}>
              <div className={`skill-card ${skill.color}`}>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className='skill-name'>{skill.name}</span>
                  <span className='skill-percentage'>{skill.level}</span>
                </div>
                <div className="progress-container">
                  <div 
                    className={`custom-progress-bar bar-${skill.color}`} 
                    style={{ width: skill.level }}
                  >
                    <div className="progress-glow"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MySkill;