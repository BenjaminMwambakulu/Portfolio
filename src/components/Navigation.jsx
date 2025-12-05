import React, { useState } from "react";
import { navigation } from "../Essentials/content";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { RiHomeLine, RiUser3Line, RiBriefcaseLine, RiMailLine } from "react-icons/ri";
import { motion, AnimatePresence } from "motion/react";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getIcon = (title) => {
    switch (title) {
      case "Home": return <RiHomeLine className="w-4 h-4" />;
      case "About": return <RiUser3Line className="w-4 h-4" />;
      case "Projects": return <RiBriefcaseLine className="w-4 h-4" />;
      case "Contact": return <RiMailLine className="w-4 h-4" />;
      default: return null;
    }
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl"
      >
        <motion.div 
          className="flex justify-between items-center py-3 px-6 backdrop-blur-2xl bg-gray-900/20 border border-gray-700/30 rounded-2xl shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <motion.span 
                className="text-lg w-10 h-10 rounded-xl text-white bg-gradient-to-br from-blue-500 to-blue-600 font-bold flex justify-center items-center shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                B
              </motion.span>
              <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-md -z-10"></div>
            </div>
            <motion.span 
              className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent hidden sm:block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Benjamin
            </motion.span>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-1 text-base">
            {navigation.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <motion.a 
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-300 hover:text-white hover:bg-blue-500/10 transition-all duration-300 group" 
                  href={item.ref}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span 
                    className="group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 15 }}
                  >
                    {getIcon(item.title)}
                  </motion.span>
                  <span className="font-medium">{item.title}</span>
                </motion.a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:text-white hover:bg-blue-500/10 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiX className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiMenuAlt3 className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Menu Panel */}
            <motion.div 
              className="absolute top-20 left-4 right-4 bg-gray-900/95 backdrop-blur-2xl border border-gray-700/50 rounded-2xl shadow-2xl p-6"
              initial={{ y: -50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -50, opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <ul className="space-y-2">
                {navigation.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                  >
                    <motion.a 
                      className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-blue-500/10 transition-all duration-300 group" 
                      href={item.ref}
                      onClick={handleLinkClick}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.span 
                        className="group-hover:scale-110 transition-transform text-blue-400"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {getIcon(item.title)}
                      </motion.span>
                      <span className="font-medium text-lg">{item.title}</span>
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
              
              {/* Decorative Elements */}
              <motion.div 
                className="absolute top-2 right-2 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute bottom-2 left-2 w-16 h-16 bg-blue-600/10 rounded-full blur-lg"
                animate={{ scale: [1, 1.1, 1], rotate: [0, -180, -360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;
