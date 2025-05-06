
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import RevealOnScroll from '../components/RevealOnScroll';

const Index = () => {
  useEffect(() => {
    document.title = "Portfolio | Software Engineer";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <RevealOnScroll>
        <About />
      </RevealOnScroll>
      
      <RevealOnScroll>
        <Skills />
      </RevealOnScroll>
      
      <RevealOnScroll>
        <Projects />
      </RevealOnScroll>
      
      <RevealOnScroll>
        <Contact />
      </RevealOnScroll>
      
      <Footer />
    </div>
  );
};

export default Index;
