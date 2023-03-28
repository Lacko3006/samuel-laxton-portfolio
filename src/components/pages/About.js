import React from 'react';
import Styles from "../../css/Styles.css";
import AboutCss from "../../css/About.css"
import ProfilePic from "../../images/IMG_0376.jpeg"

const aboutMeCss = { ...Styles, ...AboutCss }

export default function About() {
  return (
    <div className="window-size about-me-background">
      <a id="about"></a>
      <h2 className="about-me" >About Me</h2>
      <p className="about-me-text">
        I am Sam Laxton. I have recently graduated from the University of Birmingham Coding Bootcamp, finishing this bootcamp has given me a great passion for Web Development and its technologies. This cohort took place after work for 24 weeks. It went through a variety of different technologies such as: HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express.js, React.js, Node.js, Database Theory, Bookshelf.js, MongoDB, MySQL, Java, Command Line and Git.
      </p>
      <p className='about-me-text-p2'>
      I am currently employed at Element Materials Technology as a Doors & Window Test Engineer. I have always wanted a jon in technology because it has always been a passion of mine and being able to be creative in a technology environment is what I wanted to make my career.
      </p>
      <img className="profile-pic" src={ProfilePic}/>
    </div>
  );
}
