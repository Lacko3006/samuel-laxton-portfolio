import React from "react";
import "../../css/Projects.css"; // import custom CSS file for styling

import CalculatorProjectPic from "../../images/calculator-example.png"

const ProjectCards = () => {
  // Create an array of objects to hold project information
  const projects = [
    {
      id: 1,
      title: "JavaScript Calculator",
      description: "This was my first solo project.",
      image: CalculatorProjectPic, // Replace with your own image URL
      link: "https://github.com/Lacko3006/SamLaxton-Calculator/blob/main/README.md",
    },
    {
      id: 2,
      title: "Project 2",
      description: "This is project 2",
      image: "https://placekitten.com/200/200", // Replace with your own image URL
    },
    {
      id: 3,
      title: "Project 3",
      description: "This is project 3",
      image: "https://placekitten.com/200/200", // Replace with your own image URL
    },
    {
      id: 4,
      title: "Project 4",
      description: "This is project 4",
      image: "https://placekitten.com/200/200", // Replace with your own image URL
    },
    {
      id: 5,
      title: "Project 5",
      description: "This is project 5",
      image: "https://placekitten.com/200/200", // Replace with your own image URL
    },
  ];

  // Map over the projects array to create a card for each project
  const projectCards = projects.map((project) => (
    <div className="card" key={project.id}>
      <img src={project.image} alt={project.title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-description">{project.description}</p>
        <a href={project.link} target="_blank" className="card-button">
          View Project
        </a>
      </div>
    </div>
  ));

  // Render the card grid with the project cards
  return (
    <div className="projects-page">
      <a id="projects">
      <h1>Projects</h1>
      </a>
      <div className="card-grid">{projectCards}</div>
    </div>
  );
};

export default ProjectCards;
