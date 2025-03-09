import React from "react";
import { aboutMe } from "../Essentials/content";

function PersonalInfo() {
  return (
    <div className="flex justify-between">
      <div className="w-1/2 p-4">
        <h1 className="font-mono text-3xl mb-2">About Me</h1>
        <p className="text-gray-400 text-xl">{aboutMe[0].subtitle}</p>
        <div>
          <div>
            <h2 className="mt-4">Core Skills</h2>
            <ul className="flex gap-2.5">
              {aboutMe[0].skills.Backend.map((skill, index) => {
                return <li key={index}>{skill}</li>;
              })}
              {aboutMe[0].skills.Frontend.map((skill, index) => {
                return <li key={index}>{skill}</li>;
              })}
            </ul>
          </div>
          <div>
            <h2>Tools</h2>
            <ul></ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/2 max-w-1/2">
        <img src="https://fakeimg.pl/600x400" className="rounded-2xl" alt="" />
      </div>
    </div>
  );
}

export default PersonalInfo;
