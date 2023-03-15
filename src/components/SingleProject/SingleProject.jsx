import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./_singleProjects.scss";

const SingleProject = ({ project }) => {
  return (
    <div className="SingleProject">
      <figure className="SingleProject__img-container">
        <img src={project.image} alt={project.name} />
      </figure>
      <div className="SingleProject__data">
        <div className="data__languages">
          {project.languages.map((item) => (
            <span className={item} key={item}>
              {item.toUpperCase()}
            </span>
          ))}
        </div>
        <span className="data__projects-name">{project.name}</span>
        <p className="data__projects-description">{project.description}</p>
        <div className="data__links">
          <Link
            to={project.source}
            className="links__github-source github"
            target={"_blank"}
          >
            <BsGithub size={25} />
          </Link>
          <Link className="links__demo github" target={"_blank"}>
            <span>Demo</span>
            <FiExternalLink size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export { SingleProject };
