import React, { useEffect, useRef } from "react";

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
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
    <section id="hero" className="min-h-screen flex items-center pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div
          className="max-w-4xl opacity-0 translate-y-6 transition-all duration-700 ease-out"
          ref={sectionRef}
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
            Let’s build something meaningful
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="text-portfolio-pink inline-block relative">
              Rhyen Natividad
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            Product Engineer • AI/ML Enthusiast
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mb-8">
            I specialize in turning ideas into impactful digital
            experiences—from early-stage ideation and research to full product
            execution. I'm deeply curious about AI and machine learning, and I
            love integrating intelligent systems into the web to build smarter,
            more engaging tools.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-portfolio-green text-white rounded-md transition-all hover:bg-portfolio-green/80 hover:shadow-lg"
            >
              Let's Connect
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-gray-300 rounded-md transition-all hover:border-portfolio-green hover:text-portfolio-green"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
