import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './AboutSection.css';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0]);
  const sectionRef = useRef(null);

  const stats = [
    { number: 17, label: 'Years of Excellence' },
    { number: 2008, label: 'Journey Began' },
    { number: 9, label: 'Industries Served' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const timers = [];

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.number / steps;

      const timer = setInterval(() => {
        currentStep++;
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.min(Math.round(increment * currentStep), stat.number);
          return newCounters;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);

      timers.push(timer);
    });

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, [isVisible]);

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="about-brand">
        <div className="about-brand-image">
          <img
            src="/images/company/Logo.jpg"
            alt="Safe Plastomer logo"
            loading="lazy"
          />
        </div>
        <div className="about-brand-text">
          <h4 className="about-brand-title">Our refreshed identity</h4>
          <p className="about-brand-description">
            The new logo reflects our evolution from Safe Packaging to Safe Plastomer, combining strength,
            flexibility, and sustainability in every solution we deliver.
          </p>
          <div className="about-brand-gallery">
            {[
              '/images/company/brand1.jpg',
              '/images/company/brand2.jpg',
              '/images/company/brand3.jpg',
            ].map((src, idx) => (
              <div className="brand-thumb" key={src}>
                <img src={src} alt={`Brand application ${idx + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-label">ABOUT OUR COMPANY</h2>
          <h3 className="about-title">Shaping the Future of Intelligent Packaging</h3>
          <p className="about-description">
            Safe Plastomer Pvt. Ltd. stands as a renewed identity of excellence, built on the strong foundation
            of Safe Packaging, which began its journey back in 2008. After 17 years of consistent growth,
            technological advancement, and expanding client trust, the company stepped into a new era on
            1st December 2025, rebranding itself as Safe Plastomer Pvt. Ltd and relocating to a modern production
            facility. This transformation reflects our commitment to innovation, quality, and the evolving needs
            of the flexible film and sustainable packaging industry.
          </p>
          <Link to="/about" className="about-cta">
            READ MORE
            <span className="arrow">→</span>
          </Link>
          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">
                  {counters[index]}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="about-image">
          <img 
            src="/images/company/Company Bg.jpg" 
            alt="Packaging manufacturing facility" 
            loading="lazy"
          />
        </div>
      </div>
      <div className="about-owner">
        <div className="about-owner-image">
          <img
            src="/images/company/owner.png"
            alt="Safe Plastomer leadership portrait"
            loading="lazy"
          />
        </div>
        <div className="about-owner-text">
          <h4 className="about-owner-title">Guided by experience</h4>
          <p className="about-owner-description">
            Our leadership team brings hands-on expertise across flexible packaging, material science,
            and customer success—ensuring every project balances innovation with reliability.
          </p>
        </div>
      </div>
      <div className="about-secondary">
        <div className="about-secondary-image">
          <img
            src="/images/company/Company bg2.jpg"
            alt="Additional view of Safe Plastomer facility"
            loading="lazy"
          />
        </div>
        <div className="about-secondary-text">
          <h4 className="about-secondary-title">Expanding our capabilities</h4>
          <p className="about-secondary-description">
            A second production bay dedicated to new lines and rapid prototyping helps us keep pace with custom
            orders while maintaining consistent quality for large-scale runs.
          </p>
        </div>
      </div>
      <div className="about-awards">
        <div className="about-awards-header">
          <h4 className="about-awards-title">Recognitions</h4>
          <p className="about-awards-subtitle">Industry awards that validate our commitment to quality.</p>
        </div>
        <div className="about-awards-grid">
          <div className="award-card">
            <div className="award-image">
              <img
                src="/images/company/award1.jpg"
                alt="Industry award 1"
                loading="lazy"
              />
            </div>
            <div className="award-caption">Excellence in Packaging Innovation</div>
          </div>
          <div className="award-card">
            <div className="award-image">
              <img
                src="/images/company/award2.jpg"
                alt="Industry award 2"
                loading="lazy"
              />
            </div>
            <div className="award-caption">Sustainability Leadership Recognition</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

