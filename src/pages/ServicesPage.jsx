import "../styles/ServicePage.css";
import CTASection from '../components/CTASection';
import { Link } from "react-router-dom";
function ServicesPage(){
  return(
    <>
       <section className="about-hero">
        <div className="container">
        <div className="tag">
               ✦ Innovative IT Solutions Designed
            </div>
          <h1>Our <span>Services</span></h1>
          <p>
           We combine technology, creativity, and strategy to build powerful digital products that drive real results.
          </p>
          <div className="hero-buttons">
          <button className="btn-primary-custom">
            Get Free Consultation →
          </button>

          {/* <button className="btn-outline-custom">
            View Services
          </button> */}
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
            <Link to="/services/web" className="service-link">
            <div className="service-card">
              <img src="/images/service1.png" alt="Web Development"/>
              <div className="overlay">
                <h5>Web Development</h5>
              </div>
            </div>
            </Link>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <Link to="/services/mobile" className="service-link">
            <div className="service-card">
              <img src="/images/service2.png" alt="Mobile App"/>
              <div className="overlay">
                <h5>Mobile App Development</h5>
              </div>
            </div>
            </Link>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
             <Link to="/services/uiux" className="service-link">
            <div className="service-card">
              <img src="/images/service3.png" alt="UI UX"/>
              <div className="overlay">
                <h5>UI/UX Design</h5>
              </div>
            </div>
            </Link>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
             <Link to="/services/consulting" className="service-link">
            <div className="service-card">
              <img src="/images/service4.png" alt="IT Consulting"/>
              <div className="overlay">
                <h5>IT Consulting & Support</h5>
              </div>
            </div>
            </Link>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
              <Link to="/services/custom" className="service-link">
            <div className="service-card">
              <img src="/images/service5.png" alt="Software"/>
              <div className="overlay">
                <h5>Custom Software Development</h5>
              </div>
            </div>
            </Link>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
             <Link to="/services/cloud" className="service-link">
            <div className="service-card">
              <img src="/images/service6.png" alt="Cloud"/>
              <div className="overlay">
                <h5>Cloud Solutions</h5>
              </div>
            </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
    <section className="process-section">
        <div className="container">
            <div className="process-header">
                <span className="process-badge">✦ Our Process</span>
                <h2>How We Work</h2>
                 <p> We follow a structured and transparent process to deliver
        high-quality solutions.</p>
            </div>
            <div className="process-grid">
            <div className="process-card active">
                <span className="process-number">01</span>
                <h4>Requirement Analysis</h4>
                <p>We understand your business needs and goals.</p>
                <span className="process-arrow">↗</span>
            </div>
            
      <div className="process-card">
        <span className="process-number">02</span>
        <h4>Planning & Strategy</h4>
        <p>We create a detailed project roadmap.</p>
        <span className="process-arrow">↗</span>
      </div>

      <div className="process-card">
        <span className="process-number">03</span>
        <h4>Design & Development</h4>
        <p>We build your solution using modern technologies.</p>
        <span className="process-arrow">↗</span>
      </div>

      <div className="process-card">
        <span className="process-number">04</span>
        <h4>Testing</h4>
        <p>We ensure quality, performance and security.</p>
        <span className="process-arrow">↗</span>
      </div>

      <div className="process-card">
        <span className="process-number">05</span>
        <h4>Deployment</h4>
        <p>We launch the solution successfully.</p>
        <span className="process-arrow">↗</span>
      </div>

      <div className="process-card">
        <span className="process-number">06</span>
        <h4>Support</h4>
        <p>We provide ongoing support and maintenance.</p>
        <span className="process-arrow">↗</span>
      </div>


            </div>
        </div>

    </section>
    <section className="pricing-section">
        <div className="container">
            <div className="pricing-header">
                <span className="pricing-badge">✦ choose your plan</span>
                <h2>Flexible <span>Pricing</span>Plans</h2>
                <p>
                     We help businesses elevate their value through custom software development,
        product design, QA and consultancy services.
                </p>
                
            </div>
            <div className="pricing-grid">
                <div className="pricing-card">
                    <span className="plan-label">Basic Plan</span>
                    <h3>$129.99</h3>
                    <p className="price-sub">Monthly Package</p>
                    <ul>
                       <li>✔ Web Consulting</li>
          <li>✔ 24/7 System Monitoring</li>
          <li>✔ Machine and Deep Learning</li>
          <li className="disabled">Data Quality Management</li>
          <li className="disabled">Security Management</li>
                    </ul>
                     <button className="pricing-btn">Choose Plan</button>
                </div>
                 {/* Economy Plan */}
      <div className="pricing-card">
        <span className="plan-label">Economy Plan</span>

        <h3>$159.99</h3>
        <p className="price-sub">Monthly Package</p>

        <ul>
          <li>✔ Web Consulting</li>
          <li>✔ 24/7 System Monitoring</li>
          <li>✔ Machine and Deep Learning</li>
          <li>✔ Data Quality Management</li>
          <li className="disabled">Security Management</li>
        </ul>

        <button className="pricing-btn">Choose Plan</button>
      </div>

      {/* Premium Plan */}
      <div className="pricing-card">
        <span className="plan-label">Premium Plan</span>

        <h3>$189.99</h3>
        <p className="price-sub">Monthly Package</p>

        <ul>
          <li>✔ Web Consulting</li>
          <li>✔ 24/7 System Monitoring</li>
          <li>✔ Machine and Deep Learning</li>
          <li>✔ Data Quality Management</li>
          <li>✔ Security Management</li>
        </ul>

        <button className="pricing-btn">Choose Plan</button>
      </div>
            </div>
        </div>
    </section>
      <CTASection />
    </>
  )
}

export default ServicesPage;