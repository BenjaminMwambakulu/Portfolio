import React, { useState } from "react";
import { aboutMe } from "../Essentials/content";
import { importImage } from "../Essentials/getImages";
import { motion } from "motion/react";

function PersonalInfo() {
  const [activeTab, setActiveTab] = useState("Backend");

  const renderSkills = (skills) => {
    return skills.map((skill, index) => (
      <motion.li
        key={index}
        className="flex items-center gap-2 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 px-3 py-2 rounded-full text-sm hover:bg-gray-600/50 transition-colors"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ 
          duration: 0.4, 
          delay: index * 0.1,
          ease: "easeOut"
        }}
        whileHover={{ 
          scale: 1.05, 
          y: -2,
          boxShadow: "0 4px 20px rgba(59, 130, 246, 0.3)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.img
          src={importImage(skill.icon)}
          alt={skill.name}
          className="w-5 h-5"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        />
        <span>{skill.name}</span>
      </motion.li>
    ));
  };

  return (
    <motion.section 
      id="about" 
      className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Content Section */}
          <motion.div 
            className="w-full lg:w-1/2 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="font-mono text-3xl sm:text-4xl mb-4 sm:mb-6 text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              About Me
            </motion.h2>
            
            <motion.p 
              className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-8 sm:mb-12 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {aboutMe[0].subtitle}
            </motion.p>
            
            <div>
              <motion.h3 
                className="font-mono text-xl sm:text-2xl mb-6 text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Skills and Tools
              </motion.h3>
              
              {/* Tab Navigation */}
              <motion.div 
                className="flex justify-center lg:justify-start border-b border-gray-600 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {["Backend", "Frontend", "Tools"].map((tab, index) => (
                  <motion.button
                    key={tab}
                    className={`py-2 px-3 sm:px-4 font-semibold text-sm sm:text-base transition-colors ${
                      activeTab === tab
                        ? "text-blue-500 border-b-2 border-blue-500"
                        : "text-gray-400 hover:text-gray-300"
                    }`}
                    onClick={() => setActiveTab(tab)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {tab}
                  </motion.button>
                ))}
              </motion.div>
              
              {/* Skills Grid */}
              <motion.ul 
                className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start"
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {activeTab === "Backend" && renderSkills(aboutMe[0].skills.Backend)}
                {activeTab === "Frontend" && renderSkills(aboutMe[0].skills.Frontend)}
                {activeTab === "Tools" && renderSkills(aboutMe[0].skills.Tools)}
              </motion.ul>
            </div>
          </motion.div>
          
          {/* Image Section */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={importImage("profile.jpg")}
                className="rounded-2xl w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] object-cover object-top shadow-2xl"
                alt="profile image"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                onError={(e) => {
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23374151'/%3E%3Ctext x='150' y='200' text-anchor='middle' dy='.3em' fill='%236B7280' font-family='monospace' font-size='16'%3EProfile Image%3C/text%3E%3C/svg%3E";
                }}
              />
              {/* Decorative border */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-3xl -z-10 blur-xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default PersonalInfo;
