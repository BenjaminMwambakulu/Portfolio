import React, { useState } from "react";
import { projects } from "../Essentials/content";
import { importImage } from "../Essentials/getImages";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const categories = ["All", "Full Stack", "Frontend", "Backend"];
  
  const filteredProjects = projects.filter(project => 
    activeFilter === "All" || project.category === activeFilter
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  const ProjectCard = ({ project }) => (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300 group border border-gray-700/50">
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={importImage(project.image)}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23374151'/%3E%3Ctext x='200' y='100' text-anchor='middle' dy='.3em' fill='%236B7280' font-family='monospace' font-size='16'%3EProject Image%3C/text%3E%3C/svg%3E";
          }}
        />
        {project.featured && (
          <div className="absolute top-3 right-3 bg-blue-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
      </div>
      
      <h3 className="text-xl font-mono font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-gray-400 mb-4 text-sm leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs font-medium border border-blue-500/30"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all text-center"
        >
          Live Demo
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 border border-blue-500 hover:bg-blue-500/10 text-blue-400 px-4 py-2 rounded-lg text-sm font-semibold transition-all text-center"
        >
          GitHub
        </a>
      </div>
    </div>
  );

  return (
    <section id="projects" className="w-full py-20 relative">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="filter blur-3xl opacity-30">
          <div className="bg-blue-400 w-32 h-32 rounded-full absolute top-20 right-20 animate-pulse"></div>
          <div className="bg-blue-600 w-24 h-24 rounded-full absolute bottom-40 left-10 animate-bounce"></div>
          <div className="bg-blue-800 w-28 h-28 rounded-full absolute top-60 left-1/3"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-mono font-bold mb-4 text-white">
            My Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a learning journey and showcases different aspects of my development skills.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2 bg-gray-800/50 backdrop-blur-sm p-2 rounded-full border border-gray-700/50">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === category
                    ? "bg-blue-500 text-white"
                    : "text-gray-400 hover:text-blue-400 hover:bg-blue-500/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredProjects.length > 4 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-none border border-blue-500 hover:bg-blue-500/10 text-blue-400 px-6 py-3 rounded-xl text-lg font-semibold transition-all"
            >
              {showAll ? "Show Less" : `Show All (${filteredProjects.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;