import React from "react";
import Container from "react-bootstrap/Container";
import Project from "./Project";
import ProjectsList from "../../projects.json";

const ProjectsContainer = () => {
  return (
    <Container className="mt-5 border d-flex justify-content-around flex-wrap">
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
    </Container>
  );
};

export default ProjectsContainer;
