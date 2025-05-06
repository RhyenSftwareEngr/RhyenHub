import React, { useEffect, useRef } from "react";

interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "design" | "tools";
}

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: "React", icon: "react", category: "frontend" },
    { name: "JavaScript", icon: "javascript", category: "frontend" },
    { name: "TypeScript", icon: "typescript", category: "frontend" },
    { name: "HTML5", icon: "html5", category: "frontend" },
    { name: "CSS3", icon: "css3", category: "frontend" },
    { name: "Tailwind CSS", icon: "tailwind", category: "frontend" },
    { name: "Node.js", icon: "nodejs", category: "backend" },
    { name: "Express.js", icon: "express", category: "backend" },
    { name: "MongoDB", icon: "mongodb", category: "backend" },
    { name: "Figma", icon: "figma", category: "design" },
    { name: "Git", icon: "git", category: "tools" },
    { name: "GitHub", icon: "github", category: "tools" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills & Tools</h2>

        <div
          className="mt-12 animate-on-scroll"
          ref={sectionRef}
          style={{ transform: "translateY(20px)" }}
        >
          {/* Frontend Skills */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skills
                .filter((skill) => skill.category === "frontend")
                .map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="w-16 h-16 flex items-center justify-center mb-3">
                      <div className="text-4xl">{getSkillIcon(skill.icon)}</div>
                    </div>
                    <p className="text-center font-medium">{skill.name}</p>
                  </div>
                ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skills
                .filter((skill) => skill.category === "backend")
                .map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="w-16 h-16 flex items-center justify-center mb-3">
                      <div className="text-4xl">{getSkillIcon(skill.icon)}</div>
                    </div>
                    <p className="text-center font-medium">{skill.name}</p>
                  </div>
                ))}
            </div>
          </div>

          {/* Design & Tools */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Design & Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skills
                .filter(
                  (skill) =>
                    skill.category === "design" || skill.category === "tools"
                )
                .map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="w-16 h-16 flex items-center justify-center mb-3">
                      <div className="text-4xl">{getSkillIcon(skill.icon)}</div>
                    </div>
                    <p className="text-center font-medium">{skill.name}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper function to get skill icons (simplified for demo)
const getSkillIcon = (name: string) => {
  // In a real implementation, you would use actual SVG icons or an icon library
  const icons: Record<string, string> = {
    react: "⚛️",
    javascript: "JS",
    typescript: "TS",
    html5: "HTML",
    css3: "CSS",
    tailwind: "TW",
    nodejs: "Node",
    express: "Ex",
    mongodb: "MDB",
    figma: "F",
    git: "Git",
    github: "GH",
  };

  return icons[name] || "🔧";
};

export default Skills;
