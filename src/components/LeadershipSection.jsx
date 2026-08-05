import React from 'react';
import ExpertCard from './ExpertCard';
import '../styles/LeadershipSection.css';  // Correct relative path to your CSS

const LeadershipSection = () => {
  return (
    <section className="leadership-section">
        <div className="container">

      
      <div className="text-center">
        <span className="tag">✦ Our Leadership</span>
        <h2>Meet the <span>Experts</span></h2>
      </div>

      <div className="row g-1">
        <div className="col-md-3">
          <ExpertCard
            image="/images/expert1.png"
            name="Michael Ross"
            role="Co-Founder of company"
          />
        </div>
        <div className="col-md-3">
          <ExpertCard
            image="/images/expert2.png"
            name="Christina Torres"
            role="Co-Founder of company"
          />
        </div>
        <div className="col-md-3">
          <ExpertCard
            image="/images/expert3.png"
            name="Amalia Bruno"
            role="CTO of company"
          />
        </div>
        <div className="col-md-3">
          <ExpertCard
            image="/images/expert4.png"
            name="Robert Cooper"
            role="CEO of company"
          />
        </div>
      </div>
        </div>
    </section>
  );
};

export default LeadershipSection;