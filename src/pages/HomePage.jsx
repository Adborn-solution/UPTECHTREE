// src/pages/HomePage.jsx
import React from 'react';

import '../styles/HomePage.css';
import ClientLogos from "../components/ClientLogos";
import ProcessSection from "../components/ProcessSection";
import LeadershipSection from '../components/LeadershipSection';
import CTASection from '../components/CTASection';
import ClientsSection from '../components/ClientsSection'; 

const HomePage = () => {
  console.log("HomePage is loaded");
  return (
    <div className="home-page">
     
      <section className="hero">
  <div className="container">
    <div className="row align-items-center">
      
      <div className="col-md-6">
        
        {/* Small Top Badge */}
        <div className="hero-badge">
          ✨ Welcome to Up Tech Tree
        </div>

        {/* Heading */}
        <h1 className="hero-title">
          We Deliver <br />
          <span className="highlight">Smarter</span> <br />
          IT Solutions
        </h1>

        {/* Paragraph */}
        <p className="hero-text">
          From managed infrastructure to cloud migration, cybersecurity to 24/7 support — 
          we keep your business running at peak performance.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <button className="btn-primary-custom">
            Get Free Consultation →
          </button>

          <button className="btn-outline-custom">
            View Services
          </button>
        </div>

      </div>

      <div className="col-md-6 text-end">
        <img 
          src="/images/banner-sideimage.png" 
          alt="Banner" 
          className="img-fluid"
        />
      </div>

    </div>
  </div>
</section>
<section className="stats-section">
  <div className="container-fluid">
    <div className="row text-center">

      <div className="col-6 col-md-3">
        <div className="stat-box">
          <h2 className="num">99.9%</h2>
          <p className="text-num">Uptime Guarantee</p>
        </div>
      </div>

      <div className="col-6 col-md-3">
        <div className="stat-box">
          <h2 className="num">500+</h2>
          <p className="text-num">Servers Managed</p>
        </div>
      </div>

      <div className="col-6 col-md-3">
        <div className="stat-box">
          <h2 className="num">120+</h2>
          <p className="text-num">Enterprise Clients</p>
        </div>
      </div>

      <div className="col-6 col-md-3">
        <div className="stat-box">
          <h2 className="num">45+</h2>
          <p className="text-num">Support Experts</p>
        </div>
      </div>

    </div>
  </div>
</section>
 <ClientLogos />
 <section className="about-section">
  <div className="container">
    <div className="about-wrapper">
      <div className="row align-items-center">
        {/* Image Column */}
        <div className="col-lg-5 col-md-6 col-12">
          <div className="about-img">
            <img  src="/images/about-img.png"
              alt="office"
              className="img-fluid" srcset="" />
          </div>
        </div>
        <div className="col-lg-7 col-md-6 col-12">
          <div className="about-content">
            <div className="tag">
               ✦ technology index
            </div>
              <h2>
              Welcome to Up tech tree Your <br />
              One-Stop Solution for
              <span> IT Services</span>
            </h2>
             <p>
              At Up tech tree, we are a dynamic and innovative IT services
              company that thrives on helping businesses succeed in the digital
              world. With a passion for technology and a commitment to
              excellence, we have established ourselves as a trusted partner for
              organizations of all sizes and industries.
            </p>
              <p>
              Our team of dedicated professionals brings together a wealth of
              expertise in web development, app development, UI/UX development,
              software development, web designing, digital marketing, and
              outsourcing.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

 </section>
  <section className="services-section">
      <div className="container">

        {/* Section Heading */}
        <div className="text-center services-header">
          <span className="tag">✦ Our Expertise</span>
          <h2>
            Enterprise-Grade IT <span>Services</span>
          </h2>
          <p>
            We provide end-to-end technology solutions designed to keep your
            business secure, efficient, and ahead of the curve.
          </p>
        </div>

        {/* Services Grid */}
        <div className="row g-4">

          <div className="col-lg-4 col-md-6 col-12">
            <div className="service-card">
              <img src="/images/service1.png" alt="Web Development"/>
              <div className="overlay">
                <h5>Web Development</h5>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="service-card">
              <img src="/images/service2.png" alt="Mobile App"/>
              <div className="overlay">
                <h5>Mobile App Development</h5>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="service-card">
              <img src="/images/service3.png" alt="UI UX"/>
              <div className="overlay">
                <h5>UI/UX Design</h5>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="service-card">
              <img src="/images/service4.png" alt="IT Consulting"/>
              <div className="overlay">
                <h5>IT Consulting & Support</h5>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="service-card">
              <img src="/images/service5.png" alt="Software"/>
              <div className="overlay">
                <h5>Custom Software Development</h5>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="service-card">
              <img src="/images/service6.png" alt="Cloud"/>
              <div className="overlay">
                <h5>Cloud Solutions</h5>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <ProcessSection />
  <section className="solution-section">
  <div className="container">
    {/* Header Section */}
    <div className="text-center services-header">
      <span className="tag">✦ Our Work</span>
      <h2>
        Solutions <span>That Speak</span> for Themselves
      </h2>
    </div>

    {/* Work Cards */}
    <div className="row g-4">
      <div className="col-12 col-md-6 col-lg-8">
        <div className="work-card card1">
          {/* <img src="/images/layout1.png" alt="Nexora Technologies" className="img-fluid" /> */}
          <div className="work-content">
            <a href="/">
              <h5>Nexora Technologies</h5>
            </a>
            <p>
              Developed a modern, responsive corporate website to enhance the company’s online presence and improve client engagement.
            </p>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-4">
        <div className="work-card card2">
          {/* <img src="/images/layout-2.png" alt="QuickServe Delivery" className="img-fluid" /> */}
          <div className="work-content">
            <a href="/">
              <h5>QuickServe Delivery</h5>
            </a>
            <p>
              Developed a complete mobile app for delivery management and customer feedback.
            </p>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-4">
        <div className="work-card card3">
          {/* <img src="/images/layout-3.png" alt="FinCore Solutions" className="img-fluid" /> */}
          <div className="work-content">
            <a href="/">
              <h5>FinCore Solutions</h5>
            </a>
            <p>
              Provided IT consulting services to automate business processes and improve operational efficiency.
            </p>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-8">
        <div className="work-card card4">
          {/* <img src="/images/layout-4.png" alt="UrbanStyle Fashion" className="img-fluid" /> */}
          <div className="work-content">
            <a href="/">
              <h5>UrbanStyle Fashion</h5>
            </a>
            <p>
              Executed a complete digital marketing strategy to increase online sales and brand visibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 <LeadershipSection />
   <CTASection />
    <ClientsSection />
    </div>
  );
};

export default HomePage;