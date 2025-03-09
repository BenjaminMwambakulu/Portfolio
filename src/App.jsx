import React from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import PersonalInfo from "./components/PersonalInfo";

function App() {
  return (
    <div className="p-6">
      <Navigation />
      <HeroSection />
      <PersonalInfo />
    </div>
  );
}

export default App;
