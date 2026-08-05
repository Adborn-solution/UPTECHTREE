import React from 'react';
import '../styles/ExpertCard.css';  // Correct relative path to your CSS
const ExpertCard = ({ image, name, role }) => {
  return (
    <div className="expert-card">
      <img src={image} alt={name} className="expert-image" />
      <div className="expert-info">
        <h4>{name}</h4>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default ExpertCard;