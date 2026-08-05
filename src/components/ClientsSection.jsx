import React from 'react';
import '../styles/ClientsSection.css';  // Make sure you have a CSS file for this section

const ClientsSection = () => {
  return (
    <section className="clients-section">
      <div className="container">
        {/* Header Section */}
        <div className="text-center">
          <span className="tag">✦ Our Clients</span>
          <h2>
            We are Trusted <span>15+ Countries</span> Worldwide
          </h2>
        </div>

        {/* Stats and Testimonials in One Row */}
        <div className="row g-1">
          {/* Stats Section */}
          <div className="col-lg-3 col-md-6">
            <div className="stat">
              <h6>Satisfaction Rate</h6>
              <h2>98.7%</h2>
            </div>
            <div className="stat">
              <h6>Satisfaction Rate</h6>
              <h2>98.7%</h2>
            </div>
          </div>

          {/* First Testimonial */}
          <div className="col-lg-3 col-md-6">
            <div className="testimonial">
              <img
                src="/images/client1.png"
                alt="Moonkle LTD"
                className="client-image"
              />
              <h4>Moonkle LTD</h4>
              <p className="role">Client of Company</p>
              <p className="testimonial-text">
                Exceptional support in migrating our legacy systems to the cloud, enhancing our scalability and security.
              </p>
              <div className="rating">⭐⭐⭐⭐⭐</div>
            </div>
          </div>

          {/* Second Testimonial */}
          <div className="col-lg-3 col-md-6">
            <div className="testimonial">
              <img
                src="/images/client-2.png"
                alt="SoftTech"
                className="client-image"
              />
              <h4>SoftTech</h4>
              <p className="role">Manager of Company</p>
              <p className="testimonial-text">
                Modernize our IT infrastructure without disrupting daily operations. Their team was responsive and knowledgeable.
              </p>
              <div className="rating">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;