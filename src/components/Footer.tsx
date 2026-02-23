import React from "react";

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-3 font-serif text-background">ICeeWorld</h3>
            <p className="text-background/60 text-sm leading-relaxed max-w-xs">
              I See World — exploring the world one experience at a time, through stories, sights,
              and moments worth remembering.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-widest text-background/50">
              Navigate
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-background/70 hover:text-background transition-colors">About</a>
              </li>
              <li>
                <a href="#gallery" className="text-background/70 hover:text-background transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#links" className="text-background/70 hover:text-background transition-colors">Links</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-widest text-background/50">
              Follow Along
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.tiktok.com/@iceeworld94"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
              <a
                href="https://www.instagram.com/iceeworld9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-background/40 text-sm">
            &copy; {currentYear} ICeeWorld. All rights reserved.
          </p>
          <p className="text-background/40 text-sm">
            Made with curiosity and wanderlust.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
