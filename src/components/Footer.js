import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-column">
            <h3 className="footer-title">Safe Plastomer</h3>
            <nav className="footer-nav">
              <Link to="/" className="footer-link">HOME</Link>
              <Link to="/services" className="footer-link">SERVICES</Link>
              <Link to="/projects" className="footer-link">PROJECTS</Link>
              <Link to="/about" className="footer-link">ABOUT US</Link>
              <Link to="/contact" className="footer-link">CONTACT US</Link>
            </nav>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">HEAD OFFICE</h3>
            <div className="footer-contact">
              <p>KHASRA NO.-74, KHEDLI IP-4,</p>
              <p>BEGUMPUR, BAHADRABAD, HARIDWAR-249402</p>
              <p>Uttarakhand, India</p>
              <p>+91-9359626881</p>
              <p>safeplastomer@gmail.com</p>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">SOCIALS</h3>
            <div className="footer-socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">INQUIRIES</h3>
            <p className="footer-question">Looking for a quote?</p>
            <Link to="/contact" className="footer-quote-btn">
              GET A QUOTE
              <span className="arrow">→</span>
            </Link>
            <a href="/contact" className="footer-link">Become a partner</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <Link to="/privacy" className="footer-bottom-link">Privacy Policy</Link>
          <button onClick={scrollToTop} className="footer-bottom-link">Back to Top</button>
          <p className="footer-copyright">© 2025 by Safe Plastomer Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

