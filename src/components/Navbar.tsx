
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-blue-600">
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
          <Button asChild>
            <a href="#contact" className="ml-4">Get In Touch</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-800" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-8 h-full">
          <div className="flex justify-end">
            <button 
              onClick={toggleMobileMenu}
              className="text-slate-800"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <nav className="flex flex-col space-y-6 mt-16 items-center text-lg">
            <a href="#about" className="nav-link" onClick={toggleMobileMenu}>About</a>
            <a href="#skills" className="nav-link" onClick={toggleMobileMenu}>Skills</a>
            <a href="#projects" className="nav-link" onClick={toggleMobileMenu}>Projects</a>
            <a href="#contact" className="nav-link" onClick={toggleMobileMenu}>Contact</a>
            <Button asChild className="w-full mt-4">
              <a href="#contact" onClick={toggleMobileMenu}>Get In Touch</a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
