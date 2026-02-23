import React from "react";
import { MapPin, Compass, Camera } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          {/* Image side */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-secondary/40" />
            <img
              src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Exploring the world"
              className="relative z-10 w-full rounded-2xl object-cover shadow-xl"
            />
          </div>

          {/* Text side */}
          <div>
            <h2 className="section-heading mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Hi, I'm <strong className="text-foreground">ICeeWorld</strong> — a curious soul with a
              heart that belongs to the open road. "I See World" isn't just a name; it's a way of
              living — eyes wide open, always ready to discover what's around the next corner.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              From the quiet beauty of hidden landscapes to the energy of vibrant cities, I collect
              moments and share them here. This space is where my stories live — the places I've
              been, the things I've tasted, and the experiences that have shaped who I am.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-card border border-border">
                <MapPin className="text-primary mb-2" size={22} />
                <span className="text-sm font-medium text-foreground">Places Explored</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-card border border-border">
                <Compass className="text-secondary mb-2" size={22} />
                <span className="text-sm font-medium text-foreground">Always Wandering</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-card border border-border">
                <Camera className="text-accent mb-2" size={22} />
                <span className="text-sm font-medium text-foreground">Stories to Tell</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
