import "../styles/projects/projects.scss";
import projectsData from "../projects-data";
import Project from "./project";

const Projects = () => {
  console.log(projectsData);
  return (
    <div className="projects">
      <div className="projects__header">
        <span className="projects__header-title">Projects</span>
        <p className="projects__header-p">
          Check out the projects I have created. If you have any questions, feel
          free to ask.
        </p>
      </div>
      <div className="projects__gallery">
        {projectsData.map((projectData, index) => (
          <Project key={index} projectData={projectData} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
