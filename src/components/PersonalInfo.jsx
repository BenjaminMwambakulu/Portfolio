import React, { useState } from "react";
import { aboutMe } from "../Essentials/content";
import { importImage } from "../Essentials/getImages";

function PersonalInfo() {
  const [activeTab, setActiveTab] = useState("Backend");

  const renderSkills = (skills) => {
    return skills.map((skill, index) => (
      <li
        key={index}
        className="flex items-center gap-2 bg-gray-600 px-3 py-1 rounded-full"
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
    <div className="flex justify-between">
      <div className="w-1/2 p-4">
        <h1 className="font-mono text-3xl mb-2">About Me</h1>
        <p className="text-gray-400 text-xl">{aboutMe[0].subtitle}</p>
        <div>
          <div className="my-16">
            <h1 className="font-mono text-2xl mb-4">Skills and Tools</h1>
            <div className="flex border-b border-gray-600">
              <button
                className={`py-2 px-4 font-semibold ${
                  activeTab === "Backend"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-400"
                }`}
                onClick={() => setActiveTab("Backend")}
              >
                Backend
              </button>
              <button
                className={`py-2 px-4 font-semibold ${
                  activeTab === "Frontend"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-400"
                }`}
                onClick={() => setActiveTab("Frontend")}
              >
                Frontend
              </button>
              <button
                className={`py-2 px-4 font-semibold ${
                  activeTab === "Tools"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-400"
                }`}
                onClick={() => setActiveTab("Tools")}
              >
                Tools
              </button>
            </div>
            <ul className="flex flex-wrap gap-2.5 mt-4">
              {activeTab === "Backend" &&
                renderSkills(aboutMe[0].skills.Backend)}
              {activeTab === "Frontend" &&
                renderSkills(aboutMe[0].skills.Frontend)}
              {activeTab === "Tools" && renderSkills(aboutMe[0].skills.Tools)}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/2 max-w-1/2">
        <img src={importImage("profile.JPG")} className="rounded-2xl" alt="" />
      </div>
    </div>
  );
}

export default PersonalInfo;
