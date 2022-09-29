import React from "react";
import Container from "react-bootstrap/Container";
import Project from "./Project";
import ProjectsList from "../../projects.json";

const ProjectsContainer = () => {
  return (
    <Container
      id="projectsContainer"
      className="mt-5 rounded-3 Card-BackgroundColor"
    >
      <div>
        {" "}
        <h2 className="text-center pt-3">My projects</h2>
      </div>
      <div className="d-flex justify-content-around flex-wrap">
        {ProjectsList.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            githubLink={project.githubLink}
            liveTestLink={project.liveTestLink}
          />
        ))}
      </div>
    </Container>
  );
};

export default ProjectsContainer;
