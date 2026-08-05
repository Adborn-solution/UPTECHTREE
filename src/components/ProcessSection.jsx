import React from "react";
import "../styles/process.css";

const ProcessSection = () => {
  return (
    <section className="process-section">
      <div className="container">
       <div className="row g-4">

  {/* CARD 01 */}
  <div className="col-lg-4 col-md-6">
    <div className="process-card active">
      <h1>01</h1>
      <p>Discovery & Strategic Planning</p>
      <div className="arrow">↗</div>
    </div>
  </div>

  {/* CARD 02 */}
  <div className="col-lg-4 col-md-6">
    <div className="process-card">
      <h1>02</h1>
      <p>Solution Design & Development</p>
      <div className="arrow">↗</div>
    </div>
  </div>

  {/* TEXT SECTION */}
  <div className="col-lg-4 col-md-12">
    <div className="process-content">
      <span className="tag">✦ Our Process</span>

      <h2>
        From <span>Strategy</span> to
        <br /> Seamless
      </h2>

      <button className="btn btn-primary learn mt-1">
        Learn More
      </button>
    </div>
  </div>

  {/* DESCRIPTION */}
  <div className="col-lg-4 col-md-6 d-flex">
  <div className="process-desc-wrapper mt-auto">
    <p className="process-desc">
      At up tech tree, we bring together strategic insight,
      advanced technology.
    </p>
  </div>
</div>

  {/* CARD 03 */}
  <div className="col-lg-4 col-md-6">
    <div className="process-card">
      <h1>03</h1>
      <p>User Testing & Feedback</p>
      <div className="arrow">↗</div>
    </div>
  </div>

  {/* CARD 04 */}
  <div className="col-lg-4 col-md-6">
    <div className="process-card">
      <h1>04</h1>
      <p>Optimization & Ongoing Support</p>
      <div className="arrow">↗</div>
    </div>
  </div>

</div>
      </div>
    </section>
  );
};

export default ProcessSection;