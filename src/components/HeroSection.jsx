import React from "react";
import { heroSectionText } from "../Essentials/content";

function HeroSection() {
  return (
    <section id="home" className="w-full flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 pt-20">
      <div className="w-full max-w-4xl relative">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-center font-mono leading-tight">
          {heroSectionText[0].title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-center text-gray-300 max-w-3xl mx-auto">
          {heroSectionText[0].subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-4 sm:gap-6">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 rounded-xl px-6 py-3 text-lg sm:text-xl transition-all text-center font-semibold"
          >
            Let's Talk
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto bg-none border border-blue-500 hover:bg-blue-500/10 rounded-xl px-6 py-3 text-lg sm:text-xl transition-all text-center font-semibold"
          >
            View my Work
          </a>
        </div>
        
        {/* Decorative Elements - Responsive */}
        <div className="filter blur-3xl flex absolute top-0 left-0 -z-10 w-full h-full overflow-hidden">
          <div className="bg-blue-400 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full absolute top-20 sm:top-36 right-4 sm:right-20 lg:left-52 animate-bounce opacity-60"></div>
          <div className="bg-blue-600 w-20 h-20 sm:w-28 sm:h-28 lg:w-40 lg:h-40 rounded-full absolute top-40 sm:top-52 left-4 sm:left-0 opacity-60"></div>
          <div className="bg-blue-800 w-16 h-16 sm:w-24 sm:h-24 lg:w-40 lg:h-40 rounded-full absolute top-4 sm:top-2 left-1/2 sm:left-0 opacity-60"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
