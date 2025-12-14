import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'LD/HM/PP LINER BAGS',
      icon: '/images/company/linearbag.jpg',
      description: 'High-performance liner bags for industrial and commercial applications, manufactured using advanced extrusion technology to ensure durability, clarity, and consistency.',
      features: [
        'LD, HM, and PP variants',
        'Advanced extrusion technology',
        'Custom sizes and thicknesses',
        'Bulk order readiness',
        'Consistent durability and clarity',
      ],
    },
    {
      id: 2,
      title: 'LD/HM/PP PRINTED LINER BAGS',
      icon: '/images/company/printed linearbag.jpg',
      description: 'Printed liner bags with high-quality graphics and branding for clear visibility without compromising product integrity.',
      features: [
        'High-speed multi-color printing',
        'Branding and graphics customization',
        'Sharp, clear print quality',
        'Industrial and commercial ready',
        'Flexible order quantities',
      ],
    },
    {
      id: 3,
      title: 'PP WOVEN SACK BAGS',
      icon: '/images/company/pp woven bag.jpg',
      description: 'Strong and durable PP woven sacks designed for heavy-duty applications and bulk packaging needs.',
      features: [
        'High tensile strength',
        'Weather-resistant options',
        'Multiple size options',
        'Ideal for industrial and agricultural goods',
        'Custom branding available',
      ],
    },
    {
      id: 4,
      title: 'STRETCH FILM',
      icon: '/images/company/stretch film.jpg',
      description: 'Premium stretch film for secure pallet wrapping and product protection with excellent cling and clarity.',
      features: [
        'Superior cling and puncture resistance',
        'High clarity and transparency',
        'Custom width and length',
        'Smooth wrapping performance',
        'Transit-safe protection',
      ],
    },
    {
      id: 5,
      title: 'LD SHRINK ROLLS & POUCHES',
      icon: '/images/company/ld shrink and roll.jpg',
      description: 'LD shrink rolls and pouches for reliable bundling and tamper-evident packaging.',
      features: [
        'Secure bundling and sealing',
        'Tamper-evident protection',
        'Clear product visibility',
        'Customizable dimensions',
        'Consistent shrink performance',
      ],
    },
    {
      id: 6,
      title: 'PVC SHRINK ROLLS & POUCHES',
      icon: '/images/company/pvc shrink and roll.jpg',
      description: 'PVC shrink solutions designed for clarity, strength, and dependable product protection.',
      features: [
        'High clarity for display',
        'Strong shrink properties',
        'Supports complex shapes',
        'Tamper-evident seals',
        'Custom sizes on request',
      ],
    },
    {
      id: 7,
      title: 'CUSTOMIZED INDUSTRIAL PACKAGING SOLUTIONS',
      icon: '/images/company/customized.jpg',
      description: 'End-to-end, industry-specific packaging built to optimize material usage and reduce operational costs.',
      features: [
        'Custom specifications and designs',
        'Efficiency-driven concepts',
        'Cost-optimized material usage',
        'Industry-specific engineering',
        'Quality-controlled production',
      ],
    },
  ];

  return (
    <main className="services-page">
      <div className="services-page-hero">
        <h1>OUR PRODUCTS</h1>
        <p>High-Performance Sustainable Packaging Solutions</p>
      </div>
      <section className="services-page-content">
        <div className="services-page-container">
          {services.map((service) => (
            <div key={service.id} className="service-page-card">
              <div className="service-page-icon">
                {service.icon.startsWith('/images') ? (
                  <img src={service.icon} alt={service.title} />
                ) : (
                  service.icon
                )}
              </div>
              <h2 className="service-page-title">{service.title}</h2>
              <p className="service-page-description">{service.description}</p>
              <ul className="service-page-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;

