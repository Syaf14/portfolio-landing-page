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
      liveLink: "#" // <-- This will now trigger the "No Live Prod" state
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
            // 1. Check for "Coming Soon"
            const isComingSoon = project.title.toLowerCase().includes('coming soon');
            
            // 2. Check if there is no valid live link (empty, null, or just a "#" placeholder)
            const hasNoLiveLink = !project.liveLink || project.liveLink === "#";
            
            // 3. The button should be disabled if it's coming soon OR has no live link
            const isButtonDisabled = isComingSoon || hasNoLiveLink;

            return (
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
                    // Add a special disabled class if there's no link
                    className={`btn-emerald ${isButtonDisabled ? 'btn-disabled' : ''}`} 
                    onClick={() => window.open(project.liveLink, '_blank')}
                    disabled={isButtonDisabled} 
                  >
                    {/* Dynamically change the text based on the link status */}
                    {hasNoLiveLink ? "No Live Prod" : "Live Demo"}
                  </button>
                  
                  <Link to={project.galleryRoute} className="btn-outline-purple view-pics-btn text-decoration-none">
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