import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
import SocialLinks from '../components/SocialLinks';
import Footer from '../components/Footer';
import RevealOnScroll from '../components/RevealOnScroll';

const Index = () => {
  useEffect(() => {
    document.title = "ICeeWorld — I See World";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      <RevealOnScroll>
        <About />
      </RevealOnScroll>

      <RevealOnScroll>
        <Gallery />
      </RevealOnScroll>

      <RevealOnScroll>
        <SocialLinks />
      </RevealOnScroll>

      <Footer />
    </div>
  );
};

export default Index;
