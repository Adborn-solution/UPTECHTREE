import React from 'react';
import '../styles/CTASection.css';  // Add custom styles for the component

const CTASection = () => {
  return (
   <section className="cta-section">
  <div className="container"> {/* Apply the container here */}
    <div className="row">
      <div className="cta-content">
        <h2 className="cta-title">
          Ready to Optimize Your <span>IT Infrastructure?</span>
        </h2>
        <p className="cta-description">
          Let’s discuss how Up Tech Tree can streamline your operations, enhance security, and drive efficiency.
        </p>
        <button className="cta-button">Schedule consultation</button>
      </div>
    </div>
  </div>
</section>
  );
};

export default CTASection;