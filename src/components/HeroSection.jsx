import React from "react";
import { heroSectionText } from "../Essentials/content";

function HeroSection() {
  return (
    <>
      <section className="w-full flex flex-col justify-center items-center h-screen ">
        <div className="w-2/3 relative">
          <h1 className="text-7xl mb-5">{heroSectionText[0].title}</h1>
          <p className="text-2xl">{heroSectionText[0].subtitle}</p>
          <div className="filter blur-3xl flex absolute top-0 left-0">
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
