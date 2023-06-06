import React from "react";
import "../../css/Projects.css"; // import custom CSS file for styling

import CalculatorProjectPic from "../../images/calculator-example.png";
import FilmapediaPic from "../../images/Filmapedia.png";
import RhythmRaterPic from "../../images/Rhythm-rater.png";
import SQLPic from "../../images/SQL-mockup.png";
import ReadMeGeneratorPic from "../../images/readme-generator.png";

const ProjectCards = () => {
  // Create an array of objects to hold project information
  const projects = [
    {
      id: 1,
      title: "JavaScript Calculator",
      description: "This was my first solo project.",
      image: CalculatorProjectPic,
      link: "https://lacko3006.github.io/SamLaxton-Calculator"
    },
    {
      id: 2,
      title: "Filmapedia",
      description:
        "This project was created to help film lovers find popular information about their favorite skills at a moments notice.",
      image: FilmapediaPic,
      link: "https://lacko3006.github.io/Filmapedia/",
    },
    {
      id: 3,
      title: "Rhythm Rater (Mini Project 2)",
      description:
        "This project was created to help people who love music rate their favorite albums from a very long list of locally seeded data using SQL",
      image: RhythmRaterPic,
      link: "https://github.com/Lacko3006/all-albums-all-genres",
    },
    {
      id: 4,
      title: "SQL Employee Tracker",
      description:
        "This  SQL employee tracker, is used to keep track of employees within a database. I have used the inquirer package which has allowed me to use questions as prompts, I have then used the answers to the questions to send the information into a database which then can be used to showcase current employees, salaries, roles and manager. The database is called employeetracker_db.",
      image: SQLPic,
      link: "https://drive.google.com/file/d/1uOl2kyTLF7tp4V74GB1ciL8MShe4I6gd/view?usp=sharing",
    },
    {
      id: 5,
      title: "README.md Generator",
      description:
        "This is a README.md generator, this is used to create a high-quality README. I have used the inquirer package & node.js, which has allowed me to use questions as prompts, I have then used the answers to the questions to populate the README.md.",
      image: ReadMeGeneratorPic,
      link: "https://drive.google.com/file/d/19booD_SGo1OdDejbeYOJydccxme42GYR/view?usp=share_link",
    },
  ];

  // Map over the projects array to create a card for each project
  const projectCards = projects.map((project) => (
    <div className="card" key={project.id}>
      <img src={project.image} alt={project.title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-description">{project.description}</p>
        <a href={project.link} className="card-button">
          View Project
        </a>
      </div>
    </div>
  ));

  // Render the card grid with the project cards
  return (
    <div className="project-page">
      <a id="projects">
        <h1>Projects</h1>
      </a>
      <div className="card-grid">{projectCards}</div>
    </div>
  );
};

export default ProjectCards;
