import React from "react";
import { heroSectionText } from "../Essentials/content";

function HeroSection() {
  return (
    <>
      <section className="w-full flex flex-col justify-center items-center h-screen ">
        <div className="w-2/3 relative">
          <h1 className="text-6xl mb-5 text-center font-mono">
            {heroSectionText[0].title}
          </h1>
          <p className="text-2xl mb-5 text-center text-gray-300">
            {heroSectionText[0].subtitle}
          </p>
          <div className="flex justify-center items-center w-full gap-x-2.5">
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 rounded-xl px-4 py-2 text-xl transition-all"
            >
              Let's Talk
            </a>
            <a
              href="#projects"
              className="bg-none border border-blue-500 hover:bg-blue-500/10 rounded-xl px-4 py-2 text-xl transition-all"
            >
              View my Work
            </a>
          </div>
          <div className="filter blur-3xl flex absolute top-0 left-0 -z-10">
            <div className="bg-blue-400 w-40 h-40 rounded-full absolute top-36 left-52 animate-bounce"></div>
            <div className="bg-blue-600 w-40 h-40 rounded-full absolute top-52 left-0"></div>
            <div className="bg-blue-800 w-40 h-40 rounded-full absolute top-2 left-0"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
