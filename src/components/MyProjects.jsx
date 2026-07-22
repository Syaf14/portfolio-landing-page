import React from 'react';
import { Link } from 'react-router-dom';
import './MyProjects.css';

export default function MyProjects() {
  const projects = [
    {
      id: 1,
      title: "Booking Bus System",
      description: "A comprehensive bus booking system with user-friendly interface, real-time seat selection.",
      techStack: ["React", "Express", "MySQL2"],
      galleryRoute: "/projects/booking_bus_system/gallery",
      liveLink: "#"
    },
    {
      id: 2,
      title: "Business Management:Coming Soon",
      description: "Coming soon: A robust business management platform designed to streamline operations, enhance productivity, and provide insightful analytics.",
      techStack: ["React", "CSS3", "Node.js"],
      galleryRoute: "/projects/business_management/gallery",
      liveLink: "#"
    }
  ];

  return (
    <section className="hero projects-section">
      <div className="projects-container">
        
        {/* Header Section */}
        <div className="projects-header">
          <h1 className="hero-title gradient-text">My Projects</h1>
          <p className="hero-desc">A selection of my recent work</p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => {
            // Check if the title contains "coming soon" (case-insensitive)
            const isComingSoon = project.title.toLowerCase().includes('coming soon');

            return (
              // Conditionally add the 'faded-card' class
              <div key={project.id} className={`project-card ${isComingSoon ? 'faded-card' : ''}`}>
                
                <h2 className="text-emerald project-title">{project.title}</h2>
                <p className="hero-subtext project-desc">{project.description}</p>
                
                <div className="tech-stack">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-pill">{tech}</span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="project-actions">
                  <button 
                    className="btn-emerald" 
                    onClick={() => window.open(project.liveLink, '_blank')}
                    disabled={isComingSoon} // Disables the button functionality if coming soon
                  >
                    Live Demo
                  </button>
                  
                  {/* Disable link pointer events via CSS when faded */}
                  <Link to={project.galleryRoute} className="btn-outline-purple view-pics-btn">
                    View Pictures
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}