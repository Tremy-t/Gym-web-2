import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ClassesSection from './components/ClassesSection';
import PricingSection from './components/PricingSection';
import TrainersSection from './components/TrainersSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = 'APEX Fitness | Premium Gym & Fitness Center';
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ClassesSection />
      <PricingSection />
      <TrainersSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;