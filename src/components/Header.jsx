// src/components/Header.jsx
import React, { useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="nav-logo">
        <a href="/" onClick={closeMenu}>
          <img src="/images/nav-logo.png" alt="Up Tech Tree Logo" />
        </a>
      </div>

      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="/" onClick={closeMenu} className="active-link">
              Home
            </a>
          </li>

          <li>
            <a href="/about" onClick={closeMenu}>
              About Us
            </a>
          </li>

          <li>
            <a href="/services" onClick={closeMenu}>
              Services <span className="dropdown-arrow">▼</span>
            </a>
          </li>

          <li>
            <a href="/blog" onClick={closeMenu}>
              Blog
            </a>
          </li>

          <li>
            <a href="/contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>

        <a href="/contact" className="mobile-started-btn" onClick={closeMenu}>
          Get Started
        </a>
      </nav>

      <a href="/contact" className="started-btn">
        Get Started
      </a>

      <button
        className={`menu-btn ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Header;