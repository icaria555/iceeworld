import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const TikTokIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.5a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.93z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="32"
    height="32"
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

const GlobeIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

const links = [
  {
    icon: <TikTokIcon />,
    title: "TikTok",
    handle: "@iceeworld94",
    description: "Short clips, travel moments, and everyday adventures.",
    href: "https://www.tiktok.com/@iceeworld94",
    color: "text-foreground",
  },
  {
    icon: <InstagramIcon />,
    title: "Instagram",
    handle: "@iceeworld9",
    description: "Photos and stories from around the world.",
    href: "https://www.instagram.com/iceeworld9/",
    color: "text-primary",
  },
  {
    icon: <GlobeIcon />,
    title: "Valentine's World",
    handle: "valentineday.iceeworld.com",
    description: "My previous site — a little corner of the web I made.",
    href: "http://valentineday.iceeworld.com/",
    color: "text-secondary",
  },
];

const SocialLinks = () => {
  return (
    <section id="links" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading inline-block">Find Me Around the World</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mt-2">
            Follow along on socials or visit my other corner of the internet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card className="h-full bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className={`${link.color} transition-transform duration-300 group-hover:scale-110`}>
                    {link.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">{link.title}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{link.handle}</p>
                    <p className="text-foreground/70 text-sm leading-relaxed">{link.description}</p>
                  </div>
                  <div className="flex items-center gap-1 text-primary text-sm font-medium mt-auto">
                    Visit <ExternalLink size={14} />
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
