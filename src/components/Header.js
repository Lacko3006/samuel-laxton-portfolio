import React from "react";

function Header({ currentPage}) {
  return (
    <div className="align-items-center p-2 header">
      <ul className="nav d-flex justify-content-between header">
        <li className="">
          <a
            href="#home"
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Home
          </a>
        </li>
        <li className="">
          <a
            href="#about"
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About Me
          </a>
        </li>
        <li className="">
          <a
            href="#contact"
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
        <li className="">
          <a
            href="#projects"
            // onClick={() => handlePageChange("Projects")}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Projects" ? "nav-link active" : "nav-link"
            }
          >
            Projects
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
