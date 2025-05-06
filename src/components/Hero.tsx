import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6">
              Software Engineer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Building digital
              <br />
              experiences that
              <br />
              <span className="text-blue-600">make an impact</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              I craft clean, efficient code to solve complex problems and create intuitive user
              experiences. Let's build something amazing together.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="group">
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block animate-slide-up">
            <div className="relative">
              <div className="absolute -left-10 -top-10 w-40 h-40 bg-blue-200 rounded-full opacity-50"></div>
              <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-blue-100 rounded-full opacity-50"></div>
              <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Software Engineer working on code"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
