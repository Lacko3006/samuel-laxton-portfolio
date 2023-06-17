import React from "react";
import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
import Header from "./components/Header";
import ContactForm from "./components/pages/ContactForm";

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <About />
      <Skills />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default App;
