import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ServicesSection.css';

const ServicesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach(el => observer.observe(el));

    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      id: 1,
      title: 'LINER & PRINTED BAGS',
      icon: '📦',
      description: 'LD/HM/PP liner and printed liner bags built with advanced extrusion and high-speed printing for durable, consistent, brand-ready packaging.',
    },
    {
      id: 2,
      title: 'FILMS & SHRINK SOLUTIONS',
      icon: '🏭',
      description: 'PP woven sacks, stretch film, and LD/PVC shrink rolls & pouches engineered for clarity, protection, and efficient bundling.',
    },
    {
      id: 3,
      title: 'CUSTOMIZED INDUSTRIAL PACKAGING',
      icon: '⚙️',
      description: 'End-to-end packaging solutions tailored to unique industrial requirements with efficiency-driven concepts that cut operational costs.',
    },
  ];

  const machineImages = [
    '/images/company/Machine1.jpg',
    '/images/company/Machine2.jpg',
    '/images/company/Machine3.jpg',
    '/images/company/Machine4.jpg',
    '/images/company/Machine5.jpg',
    '/images/company/material.jpg',
  ];

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="services-container">
        <div className="services-intro reveal">
          <h2 className="services-label">OUR PRODUCTS</h2>
          <h3 className="services-title">High-Performance Sustainable Packaging Solutions</h3>
          <Link to="/services" className="services-cta">
            ALL PRODUCTS
            <span className="arrow">→</span>
          </Link>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card reveal"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h4 className="service-title">{service.title}</h4>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="services-brand reveal">
        <div className="services-brand-image">
          <img src="/images/company/Logo.jpg" alt="Safe Plastomer logo" loading="lazy" />
        </div>
        <div className="services-brand-text">
          <h4 className="services-brand-title">Trusted identity, consistent quality</h4>
          <p className="services-brand-description">
            Our brand reflects 17+ years of expertise across packaging solutions, backed by modern facilities and a
            commitment to reliable delivery.
          </p>
        </div>
      </div>
      <div className="services-gallery reveal">
        <div className="services-gallery-header">
          <h4 className="services-gallery-title">Machines & Materials</h4>
          <p className="services-gallery-subtitle">Snapshots from our production floor and material prep.</p>
        </div>
        <div className="services-gallery-grid">
          {machineImages.map((src, index) => (
            <div
              key={src}
              className="services-gallery-card reveal"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <img src={src} alt={`Machine or material ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

