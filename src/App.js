import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <main>
      <Navigation />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
