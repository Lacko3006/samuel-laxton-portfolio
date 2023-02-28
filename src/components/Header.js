// import { useRef } from 'react';
import React from "react";
import { Link } from "react-router-dom"

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

function Header({ currentPage, handlePageChange }) {
  return (
    <div className="d-flex align-items-center justify-content-between p-1">
      <h1 className="text-left">Sam Laxton</h1>
      <ul className="nav d-flex justify-content-end">
        <li className="">
          <Link to='/'
            onClick={() => handlePageChange("Home")}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Home
          </Link>
        </li>
        <li className="">
          <Link
            to="/about"
            onClick={() => handlePageChange("About")}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </Link>
        </li>
        <li className="">
          <Link
            to="/blog"
            onClick={() => handlePageChange("Blog")}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === "Blog" ? "nav-link active" : "nav-link"}
          >
            Blog
          </Link>
        </li>
        <li className="">
          <Link
            to="/contact"
            onClick={() => handlePageChange("Contact")}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </Link>
        </li>
        <li className="">
          <Link
            to="/projects"
            onClick={() => handlePageChange("Projects")}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Projects" ? "nav-link active" : "nav-link"
            }
          >
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
