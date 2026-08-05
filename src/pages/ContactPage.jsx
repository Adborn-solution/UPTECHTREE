import React from "react";
import "../styles/ContactPage.css";
import { useState } from "react";
const ContactPage = () => {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  /* INPUT CHANGE FUNCTION */

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  /* FORM SUBMIT FUNCTION */

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = [
      "Hello Up Tech Tree,",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || "Not provided"}`,
      `Service: ${formData.service || "Not selected"}`,
      `Message: ${formData.message || "Not provided"}`
    ].join("\n");

    window.location.href = `https://wa.me/919225525070?text=${encodeURIComponent(message)}`;
  };
  return (
    <div className="contact-page">
      {/* {hero section} */}
      <section className="contact-hero">
        <span className="badge">✦ Contact Us</span>
        <h1>
          Contact Us <span>Easily Online</span>
        </h1>
        <div className="hero-buttons">
          <buttons className="btn-primary">More About Us →</buttons>
          <div className="phone">
            <p>Give Us a Call:</p>
            <strong>+91 9225525070</strong>
          </div>
        </div>
      </section>
      {/* {CONTACT SECTION} */}

      <section className="contact-section">
        <div className="contact-container">
          {/* {LEFT SIDE} */}
          <div className="contact-info">
            <h3>
              Contact <span>Information</span>
            </h3>
            <p>
              Heve a project in mind or need expert IT solutions? We'd love to
              hear from you.
            </p>
            <div className="address">
              <h4>Address:</h4>
              <p>A-402 KPHB Colony, Hyderabad, Telangana, India – 500073</p>
              <p>A-402 KPHB Colony, Hyderabad, Telangana, India – 500073</p>
            </div>
            <div className="hours">
              <h4>Open:</h4>

              <p>Monday to Friday: 9:00 AM – 6:00 PM</p>
              <p>Saturday: 10:00 AM – 6:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
            <div className="map">
              <iframe
                src="https://maps.google.com/maps?q=Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
                title="map"
              ></iframe>
            </div>
          </div>
        {/* {RIGTH SIDE FORM} */}
        <div className="contact-form">
            <form onSubmit={handleSubmit}>

  <label>Name</label>
  <input
    type="text"
    name="name"
    placeholder="Enter your full name"
    value={formData.name}
    onChange={handleChange}
    required
  />

  <label>Email</label>
  <input
    type="email"
    name="email"
    placeholder="Enter your email"
    value={formData.email}
    onChange={handleChange}
    required
  />

  <label>Phone</label>
  <input
    type="text"
    name="phone"
    placeholder="Enter your phone number"
    value={formData.phone}
    onChange={handleChange}
  />

  <label>Service Required</label>
  <select
    name="service"
    value={formData.service}
    onChange={handleChange}
  >
    <option value="">Choose Services</option>
    <option value="Web Development">Web Development</option>
    <option value="Mobile App Development">Mobile App Development</option>
    <option value="UI/UX Design">UI/UX Design</option>
    <option value="IT Consulting">IT Consulting</option>
  </select>

  <label>Comment</label>
  <textarea
    name="message"
    placeholder="Tell us about your project"
    value={formData.message}
    onChange={handleChange}
  ></textarea>

  <button type="submit">
    Send Message
  </button>

</form>

        </div>
        </div>
      </section>
      <section className="locations-section">

  <h2 className="locations-title">
    All <span>Locations</span>
  </h2>

  <div className="locations-grid">

    {/* LOCATION 1 */}

    <div className="location-card">

      <img src="/images/hyderabad.png" alt="Hyderabad Office"/>

      <h3>Hydrabad</h3>

      <div className="location-details">

        <div className="address">

          <h4>Address:</h4>

          <p>
            A-402 KPHB COLONY,<br/>
            HYDERABAD, Telangana,<br/>
            India - 500073
          </p>

          <p>
            Operational Office Address: 2ND FLOOR : H.No. 3477/A/A/2
          </p>

        </div>

        <div className="open-hours">

          <h4>Open:</h4>

          <p>Monday to Friday: 9:00 AM to 6:00 PM (GMT)</p>
          <p>Saturday: 10:00 AM to 6:00 PM (GMT)</p>
          <p>Sunday: <span className="closed">Closed</span></p>

        </div>

      </div>

      <a href="/about" className="direction-link">→ Get Direction</a>

    </div>


    {/* LOCATION 2 */}

    <div className="location-card">

      <img src="/images/nagpur.png" alt="Nagpur Office"/>

      <h3>Nagpur</h3>

      <div className="location-details">

        <div className="address">

          <h4>Address:</h4>

          <p>
            ADIWASI SAMAJ UNNATI GURUJI NIRMAN,<br/>
            LOCATION : PRATAPNAGAR KHAMLA<br/>
            NAGPUR, PINCODE: 440015
          </p>

        </div>

        <div className="open-hours">

          <h4>Open:</h4>

          <p>Monday to Friday: 9:00 AM to 6:00 PM (GMT)</p>
          <p>Saturday: 10:00 AM to 6:00 PM (GMT)</p>
          <p>Sunday: <span className="closed">Closed</span></p>

        </div>

      </div>

      <a href="/about" className="direction-link">→ Get Direction</a>

    </div>

  </div>

</section>
    </div>
  );
};
export default ContactPage;
