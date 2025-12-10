import React from 'react';
import './About.css';

const About = () => {
  const values = [
    {
      title: 'Quality',
      description: 'Deliver products that meet high durability and performance standards.',
      icon: '⭐',
    },
    {
      title: 'Sustainability',
      description: 'Encourage eco-friendly materials and responsible manufacturing.',
      icon: '🌱',
    },
    {
      title: 'Innovation',
      description: 'Adopt new technologies for better efficiency and product enhancements.',
      icon: '💡',
    },
    {
      title: 'Integrity',
      description: 'Conduct business with transparency and honesty.',
      icon: '🤝',
    },
    {
      title: 'Customer Focus',
      description: 'Prioritize client needs with customized solutions and timely service.',
      icon: '🎯',
    },
  ];

  return (
    <main className="about-page">
      <div className="about-page-hero">
        <h1>ABOUT US</h1>
        <p>Shaping the Future of Intelligent Packaging</p>
      </div>
      <section className="about-page-content">
        <div className="about-page-container">
          <div className="about-page-main">
            <h2>Our Story</h2>
            <p>
              Safe Plastomer Pvt. Ltd. stands as a renewed identity of excellence, built on the strong
              foundation of Safe Packaging, which began its journey back in 2008. After 17 years of
              consistent growth, technological advancement, and expanding client trust, the company stepped
              into a new era on 1st December 2025, rebranding itself as Safe Plastomer Pvt. Ltd and
              relocating to a modern production facility.
            </p>
            <p>
              This transformation reflects our commitment to innovation, quality, and the evolving needs of
              the flexible film and sustainable packaging industry.
            </p>

            <h2>Founder & Leadership</h2>
            <div className="founder-section">
              <h3>Mr. Amit Tibrewal</h3>
              <p className="founder-title">Founder, Director & Visionary Leader</p>
              <p>
                With profound industry acumen and a forward-thinking leadership approach, Mr. Tibrewal has
                transformed the company from a modest manufacturing unit into a trusted, end-to-end sustainable
                packaging solutions provider, renowned for its reliability, innovation, and high-performance delivery.
              </p>
            </div>

            <h2>What We Manufacture</h2>
            <ul className="why-choose-list">
              <li>LD/HM/PP Liner Bags</li>
              <li>LD/HM/PP Printed Liner Bags</li>
              <li>PP woven sack bags</li>
              <li>Stretch Film</li>
              <li>LD Shrink Rolls & Shrink Pouches</li>
              <li>PVC Shrink Rolls & Shrink Pouches</li>
              <li>Customized all Industrial Packaging Solutions</li>
            </ul>

            <h2>Our Mission</h2>
            <p>
              To deliver innovative, sustainable, and performance-oriented packaging solutions that empower
              businesses and enhance product value.
            </p>

            <h2>Our Vision</h2>
            <p>
              To be recognized as one of India’s most trusted and technologically advanced manufacturers of
              polymer-based packaging solutions, driven by quality, innovation, and integrity.
            </p>

            <h2>Our Evolution</h2>
            <div className="evolution-timeline">
              <div className="timeline-item">
                <span className="timeline-year">2008</span>
                <p>Journey began as Safe Packaging</p>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">2008–2025</span>
                <p>Expansion, technology upgrades & industry partnerships</p>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">2025</span>
                <p>Rebranded to Safe Plastomer Pvt. Ltd. with upgraded infrastructure and a renewed strategic vision</p>
              </div>
            </div>

            <h2>Why Choose Safe Plastomer Pvt. Ltd.</h2>
            <p>
              We are not merely a manufacturer — we are a strategic packaging partner equipped with a deep
              understanding of modern industrial requirements. We deliver end-to-end packaging solutions
              supported by innovative, efficiency-driven concepts designed to optimize material usage and
              significantly reduce overall operational costs.
            </p>
            <ul className="why-choose-list">
              <li>17+ years of industry legacy with proven manufacturing excellence</li>
              <li>State-of-the-art factory infrastructure with upgraded machinery</li>
              <li>Strict quality assurance standards at every stage of production</li>
              <li>Customization capability for industries with unique requirements</li>
              <li>Reliable supply chain ensuring timely deliveries</li>
              <li>Customer-first philosophy ensuring long-term relationships</li>
            </ul>

            <h2>Technology & Infrastructure</h2>
            <p>Our production unit is equipped with:</p>
            <ul className="infrastructure-list">
              <li>Modern Blown film extrusion machines</li>
              <li>High-speed printing machines</li>
              <li>Pouching machine</li>
              <li>Quality testing equipment</li>
              <li>Skilled workforce with industry experience</li>
            </ul>
            <p>
              This advanced setup ensures consistent quality, high production capacity, and on-time delivery.
            </p>

            <h2>Industries We Serve</h2>
            <div className="industries-grid">
              <div className="industry-item">Healthcare & Pharmaceuticals</div>
              <div className="industry-item">Plastic Moulding industries</div>
              <div className="industry-item">Electric and Electronics</div>
              <div className="industry-item">FMCG</div>
              <div className="industry-item">E-commerce</div>
              <div className="industry-item">Industrial Goods</div>
              <div className="industry-item">Agriculture</div>
              <div className="industry-item">Hospitality</div>
              <div className="industry-item">Waste Management</div>
            </div>

            <h2>Corporate Responsibility</h2>
            <ul className="why-choose-list">
              <li>Reduced plastic waste</li>
              <li>Recycling initiatives</li>
              <li>Use of eco-friendly materials</li>
              <li>Energy-efficient production practices</li>
            </ul>
            <p>We aim to create sustainable packaging solutions that protect both products and the environment.</p>

            <h2>Management & Team</h2>
            <p>
              Our leadership team consists of skilled professionals dedicated to operational excellence,
              innovation, and customer satisfaction. The team ensures smooth coordination between production,
              quality control, and client service.
            </p>

            <h2>Brand Commitment</h2>
            <p>
              Safe Plastomer Pvt. Ltd. is committed to building a future where packaging is not just a
              necessity but a reliable, smart, and value-adding component of every business.
            </p>

            <h2>Company Details</h2>
            <ul className="why-choose-list">
              <li>Registered Office: KHASRA NO.-74, KHEDLI IP-4, BEGUMPUR, BAHADRABAD, HARIDWAR-249402, UTTARAKHAND</li>
              <li>Factory Location: KHASRA NO.-74, KHEDLI IP-4, BEGUMPUR, BAHADRABAD, HARIDWAR-249402, UTTARAKHAND</li>
              <li>Email: safeplastomer@gmail.com</li>
              <li>Phone: +91-9359626881</li>
            </ul>
          </div>
          <div className="about-page-values">
            <h2>Our Core Values</h2>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;


