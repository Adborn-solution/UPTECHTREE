import { useParams, Link } from "react-router-dom";
import services from "../data/servicesData";
import "../styles/ServiceDetails.css";

const ServiceDetails = () => {
  const { serviceId } = useParams();

  const service = services[serviceId];

  if (!service) {
    return <h2>Service not found</h2>;
  }

  return (
    <div className="service-details-page">

      {/* Banner */}
      <section className="service-banner">
        <div className="container">
          <span className="badge">Premium IT Services</span>
          <h1> {service.title} <span>{service.highlight}</span></h1>
        </div>
      </section>

      {/* Main Section */}
      <section className="service-main">
        <div className="container">
          <div className="row">

            {/* LEFT SIDEBAR */}
            <div className="col-lg-4">
              <div className="service-sidebar">

                <h4>Our Services</h4>

                <ul>
                  <li><Link to="/services/web">Web Development</Link></li>
                  <li><Link to="/services/mobile">Mobile App Development</Link></li>
                  <li><Link to="/services/uiux">UI/UX Design</Link></li>
                  <li><Link to="/services/consulting">IT Consulting & Support</Link></li>
                  <li><Link to="/services/custom">Custom Software Development</Link></li>
                  <li><Link to="/services/cloud">Cloud Solutions</Link></li>
                </ul>

                {/* Contact Card */}
                <div className="contact-card">
                  <h5>Find out More</h5>

                  <input type="text" placeholder="Your Name" />
                  <input type="text" placeholder="Your Number" />
                  <input type="email" placeholder="Your email" />

                  <button>Request a consultation</button>
                </div>

              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-lg-8">

              <h2>{service.title} <span className="highlight">{service.highlight}</span></h2>

              <p>{service.description}</p>

              <h4>What We Offer</h4>

              <ul className="offer-list">
                {service.offers.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
                    {/* Our Team */}

<div className="team-section">

  <h3>Our <span>Team</span> </h3>

  <div className="team-grid">

    <div className="team-card">
      <img src="/images/team1.png" alt="team" />
      <h5>Ethan White</h5>
      <p>AI Solution Architect</p>
    </div>

    <div className="team-card">
      <img src="/images/team2.png" alt="team" />
      <h5>Maya Brooks</h5>
      <p>Lead UI/UX Designer</p>
    </div>

    <div className="team-card">
      <img src="/images/team3.png" alt="team" />
      <h5>Ryan Chen</h5>
      <p>Full Stack Developer</p>
    </div>

  </div>

</div>

            </div>

          </div>
        </div>
      </section>


    </div>
  );
};

export default ServiceDetails;