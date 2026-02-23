import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const TikTokIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.5a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.93z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#faf7f2]/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#"
          className={`text-xl font-bold font-serif tracking-wide transition-colors ${
            scrolled ? "text-primary" : "text-white"
          }`}
        >
          ICeeWorld
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["#about", "#gallery", "#links"].map((href, i) => (
            <a
              key={href}
              href={href}
              className={`relative font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                scrolled
                  ? "text-foreground/80 hover:text-primary after:bg-primary"
                  : "text-white/90 hover:text-white after:bg-white"
              }`}
            >
              {["About", "Gallery", "Links"][i]}
            </a>
          ))}
          <div className="flex items-center gap-3 ml-4">
            <a
              href="https://www.tiktok.com/@iceeworld94"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                scrolled ? "text-foreground/70 hover:text-primary" : "text-white/80 hover:text-white"
              }`}
              aria-label="TikTok"
            >
              <TikTokIcon />
            </a>
            <a
              href="https://www.instagram.com/iceeworld9/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                scrolled ? "text-foreground/70 hover:text-primary" : "text-white/80 hover:text-white"
              }`}
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`md:hidden transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-[#faf7f2] z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-8 h-full">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-primary font-serif">ICeeWorld</span>
            <button type="button" onClick={toggleMobileMenu} className="text-foreground" aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-6 mt-16 items-center text-lg">
            <a href="#about" className="nav-link" onClick={toggleMobileMenu}>About</a>
            <a href="#gallery" className="nav-link" onClick={toggleMobileMenu}>Gallery</a>
            <a href="#links" className="nav-link" onClick={toggleMobileMenu}>Links</a>
          </nav>
          <div className="flex justify-center gap-6 mt-10">
            <a
              href="https://www.tiktok.com/@iceeworld94"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="TikTok"
            >
              <TikTokIcon />
            </a>
            <a
              href="https://www.instagram.com/iceeworld9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
