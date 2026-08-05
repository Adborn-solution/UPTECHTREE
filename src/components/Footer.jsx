import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <img src="/images/nav-logo.png" className="logo-img" alt="UpTech Tree" />

          <p>
            At Up Tech Tree, we are a dynamic and innovative IT services
            company that thrives on helping businesses succeed in the digital world.
          </p>

          <div className="footer-socials">
            <a href="/about"><img src="/images/Facebook.png" alt="Facebook" /></a>
            <a href="/services"><img src="/images/instagram.png" alt="Instagram" /></a>
            <a href="/contact"><img src="/images/Youtube.png" alt="Youtube" /></a>
          </div>
        </div>

        <div className="footer-links">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-services">
          <h5>Our Services</h5>
          <ul>
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Custom Software Development</li>
            <li>UI/UX Design</li>
            <li>IT Consulting</li>
          </ul>
        </div>

        <div className="footer-support">
          <h5>Support / Resources</h5>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Support</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="footer-hours">
          <h5>Open Hours</h5>
          <p>Monday to Friday: 9:00 AM to 6:00 PM</p>
          <p>Saturday: 10:00 AM to 6:00 PM</p>
          <p>Sunday: Closed</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Designed and developed by <span>Adbornsolutions.</span>
      </div>
    </footer>
  );
};

export default Footer;