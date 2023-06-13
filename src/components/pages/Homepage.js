import React from "react";
import "../../css/Homepage.css";
import GitHubLogo from "../../images/GitHub-logo.png";
import LinkedInLogo from "../../images/LinkedIn_logo_initials.png.webp";
import ResumeImg from "../../images/resume-pic.jpeg";
import ResumePdf from "../../resume/sam-laxton-cv.pdf";

export default function Home() {
  return (
    <div className="homepage">
      <a id="home"></a>
      <h1 className="homepage-name">Sam Laxton</h1>
      <h3 className="homepage-title">Junior Software Engineer</h3>
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
  );
}
