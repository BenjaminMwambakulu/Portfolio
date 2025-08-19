import React, { useState } from "react";
import { projects } from "../Essentials/content";
import { importImage } from "../Essentials/getImages";
import { motion, AnimatePresence } from "motion/react";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const categories = ["All", "Full Stack", "Frontend", "Backend"];
  
  const filteredProjects = projects.filter(project => 
    activeFilter === "All" || project.category === activeFilter
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  const ProjectCard = ({ project, index }) => (
    <motion.div 
      className="group relative bg-gray-900/40 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-gray-700/30 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      style={{ willChange: "transform" }}
    >
      {/* Simplified Border Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={importImage(project.image)}
          alt={project.title}
          className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23374151'/%3E%3Ctext x='200' y='100' text-anchor='middle' dy='.3em' fill='%236B7280' font-family='monospace' font-size='16'%3EProject Image%3C/text%3E%3C/svg%3E";
          }}
        />
        
        {/* Simplified Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        
        {project.featured && (
          <motion.div 
            className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.3, ease: "backOut" }}
          >
            Featured
          </motion.div>
        )}
      </div>
      
      <motion.h3 
        className="text-lg sm:text-xl font-mono font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
      >
        {project.title}
      </motion.h3>
      
      <motion.p 
        className="text-gray-400 group-hover:text-gray-300 mb-4 text-sm sm:text-base leading-relaxed transition-colors duration-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 + index * 0.05, duration: 0.3 }}
      >
        {project.description}
      </motion.p>
      
      <motion.div 
        className="flex flex-wrap gap-2 mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
      >
        {project.technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-400/50 transition-all duration-200 backdrop-blur-sm"
          >
            {tech}
          </span>
        ))}
      </motion.div>
      
      <motion.div 
        className="flex flex-col sm:flex-row gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 + index * 0.05, duration: 0.3 }}
      >
        <motion.a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn relative flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 sm:py-3 rounded-lg text-sm font-semibold text-center overflow-hidden shadow-lg"
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.15 }}
        >
          <span className="relative z-10">Live Demo</span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500" />
        </motion.a>
        <motion.a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn relative flex-1 border-2 border-blue-500/50 text-blue-400 hover:text-white px-4 py-2 sm:py-3 rounded-lg text-sm font-semibold text-center backdrop-blur-sm hover:bg-blue-500/10 overflow-hidden"
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.15 }}
        >
          <span className="relative z-10">GitHub</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500" />
        </motion.a>
      </motion.div>
    </motion.div>
  );

  return (
    <motion.section 
      id="projects" 
      className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
        {/* Simplified Gradient Orbs */}
        <div className="absolute top-20 right-4 sm:right-10 lg:right-20">
          <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="absolute bottom-40 left-4 sm:left-6 lg:left-10">
          <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-cyan-400/25 to-blue-600/25 rounded-full blur-3xl animate-bounce" />
        </div>
        
        <div className="absolute top-60 left-1/4 sm:left-1/3">
          <div className="w-18 h-18 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-r from-indigo-500/15 to-blue-800/15 rounded-full blur-3xl animate-pulse" />
        </div>
        
        {/* Simplified Geometric Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-500/30 rotate-45 animate-spin-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-cyan-500/30 rotate-12 animate-pulse" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-4 sm:mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            My Projects
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Here are some of the projects I've worked on. Each one represents a learning journey and showcases different aspects of my development skills.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex justify-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-wrap gap-2 bg-gray-800/50 backdrop-blur-sm p-2 rounded-full border border-gray-700/50 max-w-full">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeFilter === category
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                    : "text-gray-400 hover:text-blue-400 hover:bg-blue-500/10"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.05 * index,
                  duration: 0.3,
                  ease: "backOut"
                }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <ProjectCard key={`${activeFilter}-${project.id}`} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Show More/Less Button */}
        {filteredProjects.length > 4 && (
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="bg-none border border-blue-500 hover:bg-blue-500/10 text-blue-400 px-6 py-3 rounded-xl text-base sm:text-lg font-semibold transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? "Show Less" : `Show All (${filteredProjects.length})`}
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}

export default Projects;