import React from "react";
import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
