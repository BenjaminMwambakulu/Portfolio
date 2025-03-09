import React from "react";
import { navigation } from "../Essentials/content";

function Navigation() {
  return (
    <nav className="flex justify-center items-center gap-12 py-2 fixed top-2 left-1/2 -translate-x-1/2">
      <div className="flex justify-center items-center gap-1.5">
        <span className="text-lg p-4 w-10 h-10 rounded-full text-white bg-blue-500 font-bold flex justify-center items-center">
          B
        </span>
        <span className="text-xl font-bold text-gray-400">Benjamin</span>
      </div>
      <ul className="hidden md:flex gap-2.5 text-lg">
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <a className="hover:text-blue-500 px-1" href={item.ref}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
