import React from "react";
import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
       <Header />
      <Homepage className="Homepage" />
      <About className="About" />
      <Contact className="Contact" />
      <Projects className="Projects" />
    </div>
  );
}

export default App;
