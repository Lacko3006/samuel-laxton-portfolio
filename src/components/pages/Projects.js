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
      description: "In my JavaScript calculator project, the vibrant buttons, carefully chosen colors, and intuitive layout invite users to explore its functionality with ease. Powered by the robust JavaScript language, the calculator seamlessly handles basic arithmetic operations like addition, subtraction, multiplication, and division, providing accurate results in real-time. The calculator's error-handling mechanism ensures that any incorrect input is gracefully handled, preventing crashes and maintaining a smooth user experience. With its responsive design, the calculator adapts flawlessly to various screen sizes, making it accessible and user-friendly on both desktop and mobile devices. Whether you're solving a complex equation or simply need to calculate a tip at a restaurant, this JavaScript calculator project empowers you with speed and reliability, transforming the way calculations are performed in the digital world.",
      image: CalculatorProjectPic,
      link: "https://lacko3006.github.io/SamLaxton-Calculator"
    },
    {
      id: 2,
      title: "Filmapedia",
      description:
        "The film searching project I developed is a powerful tool that puts the vast world of cinema at your fingertips. The project features a sleek and intuitive user interface, with a prominently placed search bar serving as the gateway to a treasure trove of movie information. Upon entering a query, the project employs API calls to meticulously scour its extensive database, sifting through an abundance of film titles, actors, directors, and genres to present you with the most relevant and accurate results. As you explore the search results, the project elegantly displays key information about each film, including its title, release year, synopsis, cast, and director. Visually appealing posters and captivating images further enhance the viewing experience, allowing you to quickly assess the visual style and aesthetic of each movie. By providing this comprehensive overview, the project empowers users to make informed decisions about which films to watch, saving precious time in the process. With its seamless integration of search functionality and curated film data, this project represents an invaluable resource for cinephiles, casual moviegoers, and industry professionals alike, elevating the film-searching experience to new heights.",
      image: FilmapediaPic,
      link: "https://lacko3006.github.io/Filmapedia/",
    },
    {
      id: 3,
      title: "Rhythm Rater (Mini Project 2)",
      description:
        "This project was created to help people who love music rate their favorite albums from a very long list of locally seeded data using SQL, although needing work this is a great example of what can be done with the front and back end.",
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
      <a id="projects"></a>
        <h1>Projects</h1>
      <div className="card-grid">{projectCards}</div>
    </div>
  );
};

export default ProjectCards;
