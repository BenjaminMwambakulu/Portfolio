import React from "react";
import { motion } from "motion/react";

function NotFound() {
  const handleGoHome = () => {
    window.location.href = "/";
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute top-20 left-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-r from-red-400 to-pink-500 rounded-full blur-3xl opacity-20"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-20 right-10"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div 
            className="w-28 h-28 lg:w-36 lg:h-36 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-3xl opacity-25"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.25, 0.4, 0.25]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.div>
        
        <motion.div 
          className="absolute top-1/2 left-1/4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div 
            className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full blur-3xl opacity-15"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, -180, -360]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
          />
        </motion.div>
        
        {/* Circuit Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="circuit-404" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 0 10 L 10 10 L 10 0 M 10 10 L 20 10 M 10 10 L 10 20" stroke="rgba(239, 68, 68, 0.3)" strokeWidth="0.5" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-404)"/>
          </svg>
        </motion.div>
        
        {/* Glitch Lines */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.div 
            className="w-full h-px bg-gradient-to-r from-transparent via-red-400 to-transparent absolute top-1/4"
            animate={{ 
              scaleX: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent absolute top-3/4"
            animate={{ 
              scaleX: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1.5
            }}
          />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center relative">
        {/* 404 Number */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
        >
          <motion.h1 
            className="text-8xl sm:text-9xl lg:text-[12rem] font-mono font-black text-transparent bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 bg-clip-text leading-none"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            style={{ 
              backgroundSize: "200% 200%"
            }}
          >
            404
          </motion.h1>
        </motion.div>

        {/* Error Message */}
        <motion.div 
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold mb-4 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Page Not Found
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Oops! The page you're looking for seems to have vanished into the digital void. 
            Don't worry, even the best developers encounter broken links sometimes.
          </motion.p>
        </motion.div>

        {/* Glitch Effect Text */}
        <motion.div 
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.div 
            className="relative inline-block"
            animate={{ 
              x: [0, -2, 2, 0],
              textShadow: [
                "0 0 0 transparent",
                "2px 0 0 #ff0000, -2px 0 0 #00ffff",
                "0 0 0 transparent"
              ]
            }}
            transition={{ 
              duration: 0.3, 
              repeat: Infinity, 
              repeatDelay: 3,
              ease: "easeInOut" 
            }}
          >
            <span className="text-sm sm:text-base font-mono text-red-400 tracking-wider">
              ERROR_CODE: ROUTE_NOT_FOUND
            </span>
          </motion.div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.button
            onClick={handleGoHome}
            className="group relative bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-base sm:text-lg transition-all shadow-lg hover:shadow-blue-500/25 overflow-hidden min-w-[200px]"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Go Home
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </motion.button>

          <motion.button
            onClick={handleGoBack}
            className="group relative border-2 border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-base sm:text-lg transition-all backdrop-blur-sm hover:bg-blue-500/10 overflow-hidden min-w-[200px]"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Go Back
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </motion.button>
        </motion.div>

        {/* Fun Suggestions */}
        <motion.div 
          className="mt-12 sm:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-700/50 max-w-2xl mx-auto">
            <motion.h3 
              className="text-lg sm:text-xl font-mono font-semibold mb-4 text-white flex items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.4 }}
            >
              <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              While you're here...
            </motion.h3>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-blue-400">→</span>
                <span>Check out my projects</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">→</span>
                <span>Download my resume</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-400">→</span>
                <span>Learn about my skills</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">→</span>
                <span>Get in touch</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Easter Egg */}
        <motion.div 
          className="mt-8 text-xs text-gray-600 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.p
            animate={{ 
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default NotFound;