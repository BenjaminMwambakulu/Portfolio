import React, { useState } from "react";
import { aboutMe } from "../Essentials/content";
import { importImage } from "../Essentials/getImages";

function PersonalInfo() {
  const [activeTab, setActiveTab] = useState("Backend");

  const renderSkills = (skills) => {
    return skills.map((skill, index) => (
      <li
        key={index}
        className="flex items-center gap-2 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 px-3 py-2 rounded-full text-sm hover:bg-gray-600/50 transition-colors"
      >
        <img
          src={importImage(skill.icon)}
          alt={skill.name}
          className="w-5 h-5"
        />
        <span>{skill.name}</span>
      </li>
    ));
  };

  return (
    <section id="about" className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Content Section */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="font-mono text-3xl sm:text-4xl mb-4 sm:mb-6 text-center lg:text-left">About Me</h2>
            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-8 sm:mb-12 text-center lg:text-left">
              {aboutMe[0].subtitle}
            </p>
            
            <div>
              <h3 className="font-mono text-xl sm:text-2xl mb-6 text-center lg:text-left">Skills and Tools</h3>
              
              {/* Tab Navigation */}
              <div className="flex justify-center lg:justify-start border-b border-gray-600 mb-6">
                <button
                  className={`py-2 px-3 sm:px-4 font-semibold text-sm sm:text-base transition-colors ${
                    activeTab === "Backend"
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                  onClick={() => setActiveTab("Backend")}
                >
                  Backend
                </button>
                <button
                  className={`py-2 px-3 sm:px-4 font-semibold text-sm sm:text-base transition-colors ${
                    activeTab === "Frontend"
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                  onClick={() => setActiveTab("Frontend")}
                >
                  Frontend
                </button>
                <button
                  className={`py-2 px-3 sm:px-4 font-semibold text-sm sm:text-base transition-colors ${
                    activeTab === "Tools"
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                  onClick={() => setActiveTab("Tools")}
                >
                  Tools
                </button>
              </div>
              
              {/* Skills Grid */}
              <ul className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                {activeTab === "Backend" && renderSkills(aboutMe[0].skills.Backend)}
                {activeTab === "Frontend" && renderSkills(aboutMe[0].skills.Frontend)}
                {activeTab === "Tools" && renderSkills(aboutMe[0].skills.Tools)}
              </ul>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2">
            <div className="relative">
              <img
                src={importImage("profile.jpg")}
                className="rounded-2xl w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] object-cover object-top shadow-2xl"
                alt="profile image"
                onError={(e) => {
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23374151'/%3E%3Ctext x='150' y='200' text-anchor='middle' dy='.3em' fill='%236B7280' font-family='monospace' font-size='16'%3EProfile Image%3C/text%3E%3C/svg%3E";
                }}
              />
              {/* Decorative border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-3xl -z-10 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PersonalInfo;
