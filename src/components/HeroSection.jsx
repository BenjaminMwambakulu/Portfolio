import React from "react";
import { heroSectionText } from "../Essentials/content";
import { motion } from "motion/react";

function HeroSection() {
  return (
    <section id="home" className="relative w-full flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      {/* Simplified Futuristic Decorative Elements */}
      <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
        {/* Main Orb - Top Right */}
        <motion.div
          className="absolute top-20 right-8 sm:top-24 sm:right-16 lg:top-32 lg:right-24"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.div
            className="w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Secondary Orb - Bottom Left */}
        <motion.div
          className="absolute bottom-20 left-8 sm:bottom-24 sm:left-16 lg:bottom-32 lg:left-24"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            className="w-32 h-32 sm:w-44 sm:h-44 lg:w-56 lg:h-56 bg-gradient-to-r from-indigo-500/15 to-purple-600/15 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.div>

        {/* Subtle Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-3 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2, delay: 1.5 }}
        >
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.4) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </motion.div>

        {/* Single Scanning Line */}
        <motion.div
          className="absolute inset-0 opacity-8 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent absolute top-2/3"
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 2
            }}
          />
        </motion.div>

        {/* Minimal Floating Particles */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2.5 }}
        >
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="relative w-full max-w-4xl z-10">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-center font-mono leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {heroSectionText[0].title}
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-8 text-center text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {heroSectionText[0].subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center w-full gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="group relative w-full sm:w-auto bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-xl px-8 py-4 text-lg sm:text-xl transition-all text-center font-semibold text-white shadow-lg hover:shadow-blue-500/25 overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <span className="relative z-10">Let's Talk</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/20 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </motion.a>

          <motion.a
            href="#projects"
            className="group relative w-full sm:w-auto bg-transparent border-2 border-blue-500/50 hover:border-blue-400 rounded-xl px-8 py-4 text-lg sm:text-xl transition-all text-center font-semibold text-blue-400 hover:text-white backdrop-blur-sm hover:bg-blue-500/10 overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <span className="relative z-10">View my Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
