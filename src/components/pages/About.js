import React from "react";
import "../../css/About.css";
import ProfilePic from "../../images/IMG_0376.jpeg";

export default function About() {
  return (
    <div className="about-me">
      <a id="about"></a>
      <div className="about-me-text" >
        <h2>About Me</h2>
      <p>
        I am Sam Laxton. I have graduated from the University of Birmingham
        Coding Bootcamp. I have a passion for Web Development and its
        technologies. I attended the bootcamp 24 week course at the same time as
        working full time. I have learnt a variety of different technologies
        such as: HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express.js,
        React.js, Node.js, Database Theory, Bookshelf.js, MongoDB, MySQL, Java,
        Command Line and Git.
      </p>
      <p className="about-me-text-p2">
        I am currently employed at Element Materials Technology as a Doors &
        Window Test Engineer. I am now looking for employment in technology. It
        has always been a passion of mine and being able to be creative in this
        sector and want to pursue my career
      </p>
      </div>
      <img className="profile-pic" src={ProfilePic} />
    </div>
  );
}
