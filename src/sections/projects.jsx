import { useEffect } from "react";
import "../styles/projects/projects.scss";
import projectsData from "../projects-data";
import Project from "./project";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <section className="projects">
      <motion.div
        className="projects__header"
        ref={ref}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
          },
          hidden: {
            opacity: 0,
            y: 5,
          },
        }}
        initial="hidden"
        animate={controls}
        transition={{ delay: 0.4 }}
        id="projects"
      >
        <span className="projects__header-title">Projects</span>
        <p className="projects__header-p">
          Check out the projects I have built. If you have any questions, feel
          free to ask.
        </p>
      </motion.div>
      <div className="projects__gallery">
        {projectsData.map((projectData, index) => (
          <Project key={index} index={index} projectData={projectData} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
