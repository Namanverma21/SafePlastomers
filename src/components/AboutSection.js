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
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-label">ABOUT OUR COMPANY</h2>
          <h3 className="about-title">Shaping the Future of Intelligent Packaging</h3>
          <p className="about-description">
            Safe Plastomer Pvt. Ltd. stands as a renewed identity of excellence, built on the strong foundation 
            of Safe Packaging, which began its journey back in 2008. After 17 years of consistent growth, 
            technological advancement, and expanding client trust, the company stepped into a new era on 
            1st December 2025, rebranding itself as Safe Plastomer Pvt. Ltd. This transformation reflects 
            our commitment to innovation, quality, and the evolving needs of the sustainable packaging industry.
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
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Packaging manufacturing facility" 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

