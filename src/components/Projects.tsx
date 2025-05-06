import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application with user authentication, product management, and payment processing.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29kZXx8fHx8fDE2ODg0MDEyODQ&ixlib=rb-4.0.3&q=80&w=900",
    },
    {
      title: "Task Management App",
      description:
        "A productivity tool for teams to manage projects, tasks, and deadlines with real-time updates.",
      tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29kZSBwcm9qZWN0fHx8fHx8MTY4ODQwMTM0OQ&ixlib=rb-4.0.3&q=80&w=900",
    },
    {
      title: "Fitness Tracker",
      description:
        "A mobile-first application for tracking workouts, nutrition, and personal fitness goals.",
      tags: ["React Native", "GraphQL", "Node.js", "Chart.js"],
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaHx8fHx8fDE2ODg0MDEzODE&ixlib=rb-4.0.3&q=80&w=900",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">Featured Projects</h2>
        <p className="text-center text-slate-600 max-w-xl mx-auto mb-12">
          Here are some of the projects I've worked on. Each project is unique and showcases
          different skills and technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card overflow-hidden border-0">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href="#" className="flex items-center gap-1">
                    <Github size={16} />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href="#" className="flex items-center gap-1">
                    View Demo
                    <ArrowRight size={16} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="#" className="flex items-center gap-2">
              <span>View All Projects</span>
              <ArrowRight size={18} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
