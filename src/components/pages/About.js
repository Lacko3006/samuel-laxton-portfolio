import React from 'react';
import Styles from "../../css/Styles.css";
import AboutCss from "../../css/About.css"

const aboutMeCss = { ...Styles, ...AboutCss }

export default function About() {
  return (
    <div className="window-size about-me">
      <a id="about"></a>
      <h1 className="text-center p-5" >About Me</h1>
      <h5>
        I am a recent graduate of the University of Birmingham Coding Bootcamp. This cohort took place after work for 6 months, it taught me many valuable technologies that I loved using.
      </h5>
    </div>
  );
}
