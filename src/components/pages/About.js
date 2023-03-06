import React from 'react';
import Styles from "../../css/Styles.css";
import AboutCss from "../../css/About.css"
import ProfilePic from "../../images/IMG_0376.jpeg"

const aboutMeCss = { ...Styles, ...AboutCss }

export default function About() {
  return (
    <div className="window-size about-me">
      <a id="about"></a>
      <h1 className="text-end p-5 " ><u>About Me</u></h1>
      <h5 className="about-me-text">
        I am currently employed at Element Materials Technology as a Doors & Window Test Engineer. I have recently graduated from the University of Birmingham Coding Bootcamp. This cohort took place after work for 24 weeks. It went through a variety of different technologies such as: HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express.js, React.js, Node.js, Database Theory, Bookshelf.js, MongoDB, MySQL, Java, Command Line and Git. 
      </h5>
      <img className="profile-pic" src={ProfilePic}/>
    </div>
  );
}
