import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">© {currentYear} Your Name. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="#hero"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-400 hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
