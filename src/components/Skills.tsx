import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express", "Python", "Django", "SQL", "NoSQL"],
    },
    {
      title: "Tools & Methods",
      skills: ["Git", "CI/CD", "Docker", "AWS", "Agile", "Test-Driven Development"],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-blue-50">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
