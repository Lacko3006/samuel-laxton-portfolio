import React from "react";
import "../../css/Contact.css";
import GitHubLogo from "../../images/GitHub-logo.jpg";
import LinkedInLogo from "../../images/LinkedIn_logo_initials.png.webp";
import ResumeImg from "../../images/resume-pic.jpg";
import ResumePdf from "../../resume/sam-laxton-cv.pdf";

export default function Contact() {
  return (
    <div className="contact-content">
      <div className="contact-background">
        <a id="contact"></a>
        <div>
          <h1 className="contact-title">Contact Page</h1>
          <h5 className="link-description">Here are my Social Media Links!</h5>
          <ul className="links">
            <li className="">
              <a href="https://github.com/Lacko3006" target="_blank">
                <img
                  className="github-img"
                  src={GitHubLogo}
                  alt="GitHub Logo"
                ></img>
              </a>
            </li>
            <li className="">
              <a
                href="https://www.linkedin.com/in/samuel-laxton-ab10857b/"
                target="_blank"
              >
                <img
                  className="linked-in-img"
                  src={LinkedInLogo}
                  alt="LinkedIn Logo"
                ></img>
              </a>
            </li>
            <li className="">
              <a href={ResumePdf} target="_blank">
                <img
                  className="resume-img"
                  src={ResumeImg}
                  alt="Resume Image"
                ></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
