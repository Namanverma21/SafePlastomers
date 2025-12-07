import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'LD/HM/PP LINER BAGS',
      icon: '📦',
      description: 'High-performance liner bags manufactured using advanced extrusion technology. Available in LD (Low Density), HM (High Molecular), and PP (Polypropylene) variants. Perfect for industrial and commercial packaging needs.',
      features: [
        'LD, HM, and PP variants available',
        'Advanced extrusion technology',
        'Durable and consistent quality',
        'Customizable sizes and specifications',
        'Bulk order processing',
      ],
    },
    {
      id: 2,
      title: 'PRINTED LINER BAGS',
      icon: '🖨️',
      description: 'Custom printed liner bags with high-quality graphics and branding. Our high-speed printing machines ensure crisp, clear prints that enhance your brand visibility while maintaining product integrity.',
      features: [
        'High-speed printing technology',
        'Custom branding and graphics',
        'Crisp and clear print quality',
        'Brand visibility enhancement',
        'Multiple color options',
      ],
    },
    {
      id: 3,
      title: 'PP WOVEN SACK BAGS',
      icon: '🧵',
      description: 'Strong and durable PP woven sack bags designed for heavy-duty applications. Ideal for bulk packaging of industrial goods, agricultural products, and construction materials.',
      features: [
        'Heavy-duty construction',
        'High tensile strength',
        'Bulk packaging solutions',
        'Multiple size options',
        'Weather-resistant',
      ],
    },
    {
      id: 4,
      title: 'STRETCH FILM',
      icon: '🎬',
      description: 'Premium quality stretch film for secure pallet wrapping and product protection. Manufactured to ensure excellent cling, clarity, and puncture resistance for safe transportation.',
      features: [
        'Excellent cling properties',
        'High clarity and transparency',
        'Puncture resistance',
        'Pallet wrapping solutions',
        'Custom width and length',
      ],
    },
    {
      id: 5,
      title: 'SHRINK ROLLS & POUCHES',
      icon: '📼',
      description: 'LD and PVC shrink rolls and shrink pouches for product packaging and bundling. Perfect for creating tamper-evident seals and providing product protection during transit.',
      features: [
        'LD and PVC variants',
        'Tamper-evident packaging',
        'Product protection',
        'Bundling solutions',
        'Customizable dimensions',
      ],
    },
    {
      id: 6,
      title: 'CUSTOMIZED INDUSTRIAL PACKAGING',
      icon: '⚙️',
      description: 'Tailored packaging solutions designed to meet your unique industrial requirements. Our customization capabilities ensure optimal material usage and cost efficiency for your specific needs.',
      features: [
        'Custom specifications',
        'Industry-specific solutions',
        'Material optimization',
        'Cost-effective designs',
        'End-to-end support',
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
              <div className="service-page-icon">{service.icon}</div>
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

