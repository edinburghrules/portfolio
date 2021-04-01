import "../styles/projects/projects.scss";
import Project from "./project";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__header-text">
        <span>Projects</span>
        <p>
          Check out the projects I have created. If you have any questions, feel
          free to ask.
        </p>
      </div>
      <div className="projects__gallery">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default Projects;
