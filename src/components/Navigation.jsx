import React from "react";
import { navigation } from "../Essentials/content";

function Navigation() {
  return (
    <nav className="flex justify-between items-center gap-4 sm:gap-8 lg:gap-12 py-3 px-4 sm:px-6 fixed top-4 left-1/2 -translate-x-1/2 backdrop-blur-3xl z-20 rounded-full border border-gray-700/50 bg-gray-900/80 w-[95%] max-w-4xl">
      <div className="flex justify-center items-center gap-2">
        <span className="text-sm sm:text-lg w-8 h-8 sm:w-10 sm:h-10 rounded-full text-white bg-blue-500 font-bold flex justify-center items-center">
          B
        </span>
        <span className="text-lg sm:text-xl font-bold text-gray-400 hidden xs:block">Benjamin</span>
      </div>
      <ul className="flex gap-1 sm:gap-2 lg:gap-4 text-sm sm:text-base lg:text-lg">
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <a className="hover:text-blue-500 px-2 sm:px-3 py-1 rounded-lg transition-colors" href={item.ref}>
                <span className="hidden sm:inline">{item.title}</span>
                <span className="sm:hidden">
                  {item.title === "Home" && "🏠"}
                  {item.title === "Projects" && "💼"}
                  {item.title === "About" && "👤"}
                  {item.title === "Contact" && "📧"}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
