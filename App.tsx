import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import HowItWorks from './components/HowItWorks';
import Offer from './components/Offer';
import Services from './components/Services';
import AISection from './components/AISection';
import Industries from './components/Industries';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);
  return (
    <div style={{ background: '#07090C', minHeight: '100vh' }}>
      <Navbar scrolled={scrolled} />
      <Hero />
      <Trust />
      <HowItWorks />
      <Offer />
      <Services />
      <AISection />
      <Industries />
      <CTASection />
      <Footer />
    </div>
  );
};
export default App;