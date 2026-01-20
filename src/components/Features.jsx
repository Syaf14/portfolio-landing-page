import React from 'react';
import './Features.css';

const featuresData = [
  {
    title: 'Fast Performance',
    description: 'Experience blazing fast speed with our app.',
  },
  {
    title: 'Secure',
    description: 'Your data is safe with top-notch security measures.',
  },
  {
    title: 'Easy to Use',
    description: 'Simple interface that anyone can navigate.',
  },
];

const Features = () => {
  return (
    <section className="features">
      <h2>Features</h2>
      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
