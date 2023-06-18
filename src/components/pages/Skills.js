import React from "react";
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import "../../css/Skills.css";

export default function Contact() {
  return (
    <div className="contact-content">
      <div className="contact-background">
        <a id="skill"></a>
        <div>
          <h1 className="contact-title">Skills</h1>
          <HtmlIcon color="secondary" sx={{ fontSize: 75 }}/>
          <CssIcon color="secondary" sx={{ fontSize: 75 }}/>
          <JavascriptIcon color="secondary" sx={{ fontSize: 75 }}/>
        </div>
      </div>
    </div>
  );
}
