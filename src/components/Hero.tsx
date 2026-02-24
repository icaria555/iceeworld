import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat" />
      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2c1810]/30 via-[#2c1810]/20 to-[#2c1810]/55" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <span className="inline-block py-1 px-4 rounded-full bg-[#d4a853]/30 border border-[#d4a853]/60 text-[#d4a853] font-medium text-sm mb-8 tracking-widest uppercase">
          ICeeWorld
        </span>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
          I See{" "}
          <span className="italic text-secondary">World</span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Exploring the world one experience at a time — through stories, sights, and the little
          moments that make life worth seeing.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground border-none"
          >
            <a href="#gallery">Explore Gallery</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/60 text-white bg-white/10 hover:bg-white/20 hover:border-white"
          >
            <a href="#about">About Me</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  );
};

export default Hero;
