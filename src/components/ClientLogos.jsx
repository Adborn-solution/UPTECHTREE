import React from "react";
import "../styles/ClientLogos.css";

const ClientLogos = () => {
  return (
    <section className="clients-section">
      <h5 className="clients-title">Trusted by Industry Leaders</h5>

      <div className="logos">
        <div className="logos-slide">

          <div className="logo-badge">IBM Media</div>
          <div className="logo-badge">Microsoft</div>
          <div className="logo-badge">Amazon</div>
          <div className="logo-badge">Google</div>
          <div className="logo-badge">Adobe</div>
          <div className="logo-badge">Spotify</div>
          <div className="logo-badge">Netflix</div>
           <div className="logo-badge">IBM Media</div>
          <div className="logo-badge">Microsoft</div>
          <div className="logo-badge">Amazon</div>

          {/* Duplicate for infinite scroll */}
          <div className="logo-badge">IBM Media</div>
          <div className="logo-badge">Microsoft</div>
          <div className="logo-badge">Amazon</div>
          <div className="logo-badge">Google</div>
          <div className="logo-badge">Adobe</div>
          <div className="logo-badge">Spotify</div>
          <div className="logo-badge">Netflix</div>
           <div className="logo-badge">IBM Media</div>
          <div className="logo-badge">Microsoft</div>
          <div className="logo-badge">Amazon</div>

        </div>
      </div>
    </section>
  );
};

export default ClientLogos;