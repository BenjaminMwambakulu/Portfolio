import React from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import PersonalInfo from "./components/PersonalInfo";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PersonalInfo />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
