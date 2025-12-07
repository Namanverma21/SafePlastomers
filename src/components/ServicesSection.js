import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'LINER BAGS',
      icon: '📦',
      description: 'High-performance LD/HM/PP Liner Bags and Printed Liner Bags designed for industrial and commercial applications. Crafted using advanced extrusion technology for durability and consistency.',
    },
    {
      id: 2,
      title: 'PACKAGING SOLUTIONS',
      icon: '🏭',
      description: 'Comprehensive range including PP woven sack bags, Stretch Film, Shrink Rolls & Pouches (LD & PVC), and customized industrial packaging solutions tailored to your specific requirements.',
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-intro">
          <h2 className="services-label">OUR PRODUCTS</h2>
          <h3 className="services-title">High-Performance Sustainable Packaging Solutions</h3>
          <Link to="/services" className="services-cta">
            ALL PRODUCTS
            <span className="arrow">→</span>
          </Link>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h4 className="service-title">{service.title}</h4>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

