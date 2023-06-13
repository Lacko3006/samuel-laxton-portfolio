import React from "react";
import "../../css/About.css";
import ProfilePic from "../../images/IMG_0376.jpeg";

export default function About() {
  return (
    <div className="about-me">
      <div className="about-me-text">
        <a id="about">
          <h2>About Me</h2>
        </a>
        <p>
          Hello there, I am Sam Laxton. Since a young age, my passion for
          technology has pushed me to always research new technology. The
          innovation and the ever-evolving world of the digital landscape have
          captivated my imagination and fueled my desire to become a web
          developer. Now, at the age of 26, I have finally been able to begin my
          journey of fulfilling my lifelong dream. Driven by self-motivation, I
          embarked on a journey to become a highly skilled web developer. Each
          line of code I write, each project I undertake, is more enjoyable than
          the last.
        </p>
        <p className="about-me-text-p2">
          I have recently graduated from the University of Birmingham Coding
          Bootcamp and I am super excited to get myself into the world of tech!
          I attended the Coding Bootcamp at the same time as being fully
          employed! This course took 24 weeks and I have learnt a variety of
          different technologies such as: HTML5, CSS3, JavaScript, jQuery,
          Bootstrap, Express.js, React.js, Node.js, Database Theory,
          Bookshelf.js, MongoDB, MySQL, Java, Command Line and Git.
        </p>
      </div>
      <img className="profile-pic" src={ProfilePic} />
    </div>
  );
}
