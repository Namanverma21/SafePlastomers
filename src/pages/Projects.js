import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Pharmaceutical Packaging Solutions',
      category: 'Healthcare',
      image: '/images/company/phara cutiral.jpg',
      description: 'Custom LD/HM liner bags and shrink packaging solutions for pharmaceutical products ensuring safety and compliance.',
    },
    {
      id: 2,
      title: 'FMCG Bulk Packaging',
      category: 'FMCG',
      image: '/images/company/fmcg.jpg',
      description: 'High-volume PP woven sack bags and stretch film solutions for FMCG industry with custom branding.',
    },
    {
      id: 3,
      title: 'E-commerce Packaging',
      category: 'E-commerce',
      image: '/images/company/e commerce.jpg',
      description: 'Sustainable packaging solutions for e-commerce platforms including printed liner bags and shrink wraps.',
    },
    {
      id: 4,
      title: 'Industrial Goods Packaging',
      category: 'Industrial',
      image: '/images/company/indusatrial goods.jpg',
      description: 'Heavy-duty packaging solutions for industrial goods including custom PP bags and protective films.',
    },
    {
      id: 5,
      title: 'Agricultural Packaging',
      category: 'Agriculture',
      image: '/images/company/agriculture.jpg',
      description: 'Durable PP woven sacks and liner bags designed for agricultural products with weather-resistant properties.',
    },
    {
      id: 6,
      title: 'Custom Printed Packaging',
      category: 'Custom',
      image: '/images/company/customized.jpg',
      description: 'Branded packaging solutions with high-quality printing for enhanced product visibility and brand recognition.',
    },
  ];

  return (
    <main className="projects-page">
      <div className="projects-page-hero">
        <h1>OUR PROJECTS</h1>
        <p>Showcasing Our Excellence in Sustainable Packaging Solutions</p>
      </div>
      <section className="projects-page-content">
        <div className="projects-page-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;

