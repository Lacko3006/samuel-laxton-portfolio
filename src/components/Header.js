import React, { useState, useEffect } from "react";
import HouseLogo from "../images/house-logo.png";
import AboutMeLogo from "../images/about-me.png";
import MobileLogo from "../images/mobile-logo.png";
import ProjectsLogo from "../images/project-logo.png";
import "../css/Header.css";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar-wrapper">
      <div className={`navbar`}>
        <h2>Sam Laxton Portfolio</h2>
        <div className="navbar-links">
          <div className="container">
            <a href="#home">
              <img className="house-img" src={HouseLogo} alt="House Logo"></img>
            </a>
          </div>
          <div className="container">
            <a href="#about">
              <img
                className="about-me-img"
                src={AboutMeLogo}
                alt="About Me Logo"
              ></img>
            </a>
          </div>
          <div className="container">
            <a href="#contact">
              <img
                className="mobile-img"
                src={MobileLogo}
                alt="mobile logo"
              ></img>
            </a>
          </div>
          <div className="container">
            <a href="#projects">
              <img className="project-img" src={ProjectsLogo} alt="Book"></img>
            </a>
          </div>
        </div>
        <div
          id="burger-icon"
          onClick={toggleMobileMenu}
          className={isMobileMenuOpen ? "open" : ""}
        >
          <div className={`bar1 ${isMobileMenuOpen ? "open" : ""}`}></div>
          <div className={`bar2 ${isMobileMenuOpen ? "open" : ""}`}></div>
          <div className={`bar3 ${isMobileMenuOpen ? "open" : ""}`}></div>
          <ul className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
