import React from "react";
import { SingleProject } from "../../components/SingleProject/SingleProject";
import { projectsData } from "../../projectsData";
import "./_projectsScreen.scss";

const ProjectScreen = () => {
  return (
    <div className="ProjectScreen screen">
      <h2 className="ProjectScreen__title">My projects</h2>
      <p>*All are responsive*</p>
      <div className="ProjectScreen__projects-container">
        {projectsData.map((item) => (
          <SingleProject project={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export { ProjectScreen };
