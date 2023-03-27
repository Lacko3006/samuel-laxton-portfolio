import React from "react";
import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import Header from "./components/Header";
import './css/Styles.css'

function App() {
  return (
    <div>
       <Header />
      <Homepage/>
      <About />
      <Contact />
      <Projects />
    </div>
  );
}

export default App;
