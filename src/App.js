import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import Header from "./components/Header";

function App() {
  return (
    <div>
       <Header />
      <Homepage/>
      <About />
      <Blog />
      <Contact />
      <Projects />
    </div>
  );
}

export default App;
