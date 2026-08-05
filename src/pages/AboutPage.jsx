import React from "react";

import LeadershipSection from '../components/LeadershipSection';
import CTASection from '../components/CTASection';
import "../styles/AboutPage.css";

const AboutPage = () => {
  return (
    <>
     

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
        <div className="tag">
               ✦ Innovating the Future of IT
            </div>
          <h1>About <span>Up Tech Tree</span></h1>
          <p>
            Empowering businesses through smart technology solutions.
            We build digital infrastructure that powers tomorrow's industry leaders.
          </p>
          <div className="hero-buttons">
          <button className="btn-primary-custom">
            Get Free Consultation →
          </button>

          <button className="btn-outline-custom">
            View Services
          </button>
        </div>
        </div>
      </section>

      {/* Who We Are */}
      
      <section className="top-tier">
        <div className="container top-tier-contain">
           <h3>
We bridge the gap between <br />
<span>imagination and reality.</span>
</h3>
            <div className="row top-row">
                <div className="col-12 col-md-6 top-left">
                   <div className="big-card">
                     <p>Welcome to Up tech tree, a leading IT service company based in Hyderabad. With a passion for technology and a commitment to excellence, we specialize in providing comprehensive IT solutions to businesses of all sizes.</p>
                     <p>At Up tech tree, we understand that every business is unique, with its own set of challenges and goals. That’s why we take a personalized approach, tailoring our services to meet the specific needs of each client. Whether you are a small startup or a large enterprise</p>
                   </div>
                   <div className=" d-flex small-card">
                    <div>
                        <img src="/images/clean-code.png" alt=""  />
                        <p>Clean Code</p>
                    </div>
                    <div>
                        <img src="/images/pixel_technology.png" alt=""  />
                        <p>Modern Tech</p>
                    </div>
                    <div>
                        <img src="/images/jam_world.png
                        " alt="" />
                        <p>Global Reach</p>
                    </div>
                   </div>
                </div>
                 <div className="col-12 col-md-6 top-right">
                     <img src="/images/right-img.png" alt="team" />
                    <div className="small-icon">
                       <div className="image-section">
                         <img src="/images/top1.png" alt="" srcset="" />
                         <img src="/images/top2.png" alt="" srcset="" />
                         <img src="/images/top3.png" alt="" srcset="" />
                       </div>
                       <div className="top-text">
                          <strong>Top-tier Talent</strong>
                          <p>Experts in every field</p>
                       </div>
                    </div>
                </div>
            </div>
            
        </div>
      </section>
      <section className="mission-section">
  <div className="container">
    <div className="mission-wrapper">

      {/* Mission Card */}
      <div className="mission-card">
        <div className="mission-icon">
          <img src="/images/mission1.png" alt="mission" />
        </div>

        <h4>Our Mission</h4>

        <p>
          Our mission at Up tech tree is to be the preferred IT service provider,
          empowering businesses to thrive in the digital era. We strive to achieve
          this by:
        </p>

        <ul>
          <li>Providing Comprehensive IT Solutions</li>
          <li>Delivering Superior Customer Experiences</li>
          <li>Driving Innovation</li>
          <li>Fostering Long-Term Partnerships</li>
          <li>Customer-Centric Approach</li>
        </ul>
      </div>

      {/* Vision Card */}
      <div className="mission-card">
        <div className="mission-icon">
          <img src="/images/mission2.png" alt="vision" />
        </div>

        <h4>Our Vision</h4>

        <p>
          Our vision at Up tech tree is to be a leading IT service company,
          recognized for our excellence, innovation, and commitment to
          delivering transformative solutions. We envision:
        </p>

        <ul>
          <li>Being a Trusted Technology Partner</li>
          <li>Driving Digital Transformation</li>
          <li>Making a Positive Impact</li>
          <li>Inspiring Technological Excellence</li>
          <li>Customer-Centric Approach</li>
        </ul>
      </div>

    </div>
  </div>
</section>
<section className="core-values">
  <div className="container">

    <div className="values-header">
      <h2>Our Core <span>Values</span></h2>
      <p>The principles that guide our decisions and shape our culture.</p>
    </div>

    {/* Top Cards */}
    <div className="values-grid">

      <div className="value-card">
        <div className="value-icon"><img src="/images/value1.png" alt="" srcset="" /></div>
        <h4>Innovation</h4>
        <p>We push boundaries and embrace the new.</p>
      </div>

      <div className="value-card">
        <div className="value-icon"><img src="/images/value2.png" alt="" srcset="" /></div>
        <h4>Integrity</h4>
        <p>Transparent, honest, and reliable in every line of code.</p>
      </div>

      <div className="value-card">
        <div className="value-icon"><img src="/images/value3.png" alt="" srcset="" /></div>
        <h4>Excellence</h4>
        <p>We don't settle for "good enough". We aim for perfect.</p>
      </div>

      <div className="value-card">
        <div className="value-icon"><img src="/images/value4.png" alt="" srcset="" /></div>
        <h4>Customer Success</h4>
        <p>Your growth is our primary metric of success.</p>
      </div>

    </div>

    {/* Timeline Section */}
    <div className="timeline">

      <div className="timeline-item left">
        <h4>Agile Methodology</h4>
        <p>Rapid iterations and flexible adaptation to change.</p>
      </div>

      <div className="timeline-item right">
        <h4>Top 1% Talent</h4>
        <p>Developers vetted for extreme technical proficiency.</p>
      </div>

      <div className="timeline-item left">
        <h4>24/7 Support</h4>
        <p>Always on, always ready to help you scale.</p>
      </div>

      <div className="timeline-item right">
        <h4>Security First</h4>
        <p>Enterprise-grade security baked into every product.</p>
      </div>

    </div>

  </div>
</section>
      <section className="stats-section">
  <div className="container stats-container">

    <div className="stat-box">
      <h2>100+</h2>
      <p>Projects Delivered</p>
    </div>

    <div className="stat-box">
      <h2>50+</h2>
      <p>Happy Clients</p>
    </div>

    <div className="stat-box">
      <h2>5+</h2>
      <p>Years Experience</p>
    </div>

    <div className="stat-box">
      <h2>15+</h2>
      <p>Tech Experts</p>
    </div>

  </div>
</section>
<LeadershipSection />
   <CTASection />
    </>
  );
};

export default AboutPage;