import React from "react";
import { Link } from "react-router-dom";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiReact, DiSass } from "react-icons/di";
import { SiJavascript, SiRedux } from "react-icons/si";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import me from "../../assets/imgs/me_tiny.jpg";
import "./_homesScreen.scss";

const HomeScreen = () => {
  return (
    <div className="HomeScreen screen">
      <div className="HomeScreen__data">
        <div className="data__left">
          <figure className="data__img-container">
            <img src={me} alt="Julián Quintero" />
          </figure>
        </div>
        <div className="data__right">
          <h1>Julián Quintero</h1>
          <span>Frontend Developer</span>
          <div className="data__social-media">
            <Link to="https://github.com/JulianQA" target="_blank">
              <BsGithub size={40} className="github" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/juli%C3%A1nfelipequinteroaguilera/"
              target="_blank"
            >
              <BsLinkedin className="linkedin" size={40} />
            </Link>
          </div>
        </div>
      </div>
      <div className="HomeScreen__tech-stack">
        <span>Tech Stack: </span>
        <div className="tech-stack__container">
          <AiFillHtml5 className="html5" />
          <DiCss3 className="css" />
          <SiJavascript className="js" />
          <DiReact className="react" />
          <DiSass className="sass" />
          <SiRedux className="redux" />
        </div>
      </div>
    </div>
  );
};

export { HomeScreen };
