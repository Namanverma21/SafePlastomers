import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import './Home.css';

const Home = () => {
  return (
    <main className="home">
      <Hero />
      <ServicesSection />
      <AboutSection />
    </main>
  );
};

export default Home;

