import React, { useEffect, useRef } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Interactive Dashboard",
      description:
        "A responsive admin dashboard with data visualization and real-time updates.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["React", "Tailwind CSS", "Chart.js"],
      link: "#",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description:
        "A modern e-commerce site with product filtering, cart functionality, and payment integration.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      id: 3,
      title: "Portfolio Generator",
      description:
        "A tool that helps creatives build and deploy professional portfolios with minimal effort.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      link: "#",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectElements = document.querySelectorAll(".project-card");
    projectElements.forEach((el) => observer.observe(el));

    return () => {
      projectElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-on-scroll"
              style={{
                transform: "translateY(20px)",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-gray-100 rounded-full text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-block px-4 py-2 border border-portfolio-green text-portfolio-green rounded-md transition-colors hover:bg-portfolio-green hover:text-white"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
