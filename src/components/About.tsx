import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
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
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div 
            className="animate-on-scroll" 
            ref={sectionRef} 
            style={{ transform: 'translateY(20px)' }}
          >
            <p className="text-lg mb-6">
              Hello! I'm a passionate developer and designer with a love for creating beautiful, 
              functional digital experiences. With a background in both design and development, 
              I bring a unique perspective to every project.
            </p>
            <p className="text-lg mb-6">
              I specialize in front-end development with React, creating responsive interfaces 
              that are both visually appealing and provide excellent user experiences. I believe 
              in writing clean, maintainable code and staying updated with the latest web technologies.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring design trends, contributing to open-source 
              projects, or experimenting with new creative tools and technologies.
            </p>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-full h-full border-2 border-portfolio-pink rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="Profile" 
                className="w-full max-w-md rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;