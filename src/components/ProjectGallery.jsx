import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectGallery.css';

export default function ProjectGallery() {
  // Grabs the ":projectId" from your App.js route (e.g., "alpha" or "beta")
  const { projectId } = useParams(); 
  const navigate = useNavigate();

  // Placeholder image data - Replace these URLs with your actual project screenshots
  const projectImages = {
    "booking_bus_system": [
      "/projects/booking_bus_system/Booking_bus_1.png",
      "/projects/booking_bus_system/Booking_bus_2.png",
      "/projects/booking_bus_system/Booking_bus_3.png",
      "/projects/booking_bus_system/Booking_bus_4.png",
      "/projects/booking_bus_system/Booking_bus_5.png",
      "/projects/booking_bus_system/Booking_bus_6.png",
      "/projects/booking_bus_system/Booking_bus_7.png",
      "/projects/booking_bus_system/Booking_bus_8.png",
      "/projects/booking_bus_system/Booking_bus_9.png",
      "/projects/booking_bus_system/Booking_bus_10.png",
      "/projects/booking_bus_system/Booking_bus_11.png",
      "/projects/booking_bus_system/Booking_bus_12.png",
      "/projects/booking_bus_system/Booking_bus_13.png",
      "/projects/booking_bus_system/Booking_bus_14.png",
      "/projects/booking_bus_system/Booking_bus_15.png"
    ],
    "beta": [
      "https://via.placeholder.com/800x500/8b5cf6/000000?text=Beta+Screenshot+1",
      "https://via.placeholder.com/800x500/10b981/ffffff?text=Beta+Screenshot+2"
    ]
  };

  // If a project doesn't have images mapped above, show a default image
  const images = projectImages[projectId] || [
    "https://via.placeholder.com/800x500/333333/ffffff?text=Images+Coming+Soon"
  ];

  const displayTitle = projectId.replace(/_/g, ' ');

  return (
    // Reusing the "hero" class to keep your mesh gradient background
    <div className="gallery-page hero">
      <div className="gallery-container">
        
        <div className="gallery-header">
          {/* Back Button */}
          <button onClick={() => navigate(-1)} className="btn-outline-purple back-btn">
            &larr; Back to Portfolio
          </button>
          
          <h1 className="hero-title gradient-text">Project Gallery</h1>
          <p className="hero-desc text-emerald" style={{ textTransform: 'capitalize' }}>
            {projectId.replace(/_/g, ' ')} Project
          </p>
        </div>

        {/* Image Grid */}
        <div className="gallery-grid">
          {images.map((imgSrc, index) => (
            <div key={index} className="gallery-card">
              <img 
                src={imgSrc} 
                alt={`${projectId} screenshot ${index + 1}`} 
                className="gallery-image" 
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}