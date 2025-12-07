import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Shaping the Future of Intelligent Packaging</h1>
        <p className="hero-subtitle">17+ Years of Excellence in Sustainable Packaging Solutions</p>
        <Link to="/contact" className="hero-cta">
          GET A QUOTE
          <span className="arrow">→</span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;

