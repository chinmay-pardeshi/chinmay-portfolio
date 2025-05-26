import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
// import Services from "./components/Services";
import ProjectContainer from "./components/ProjectContainer";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ProjectContainer />
      <Contact />
      
      
    </div>
  );
}

export default App;
