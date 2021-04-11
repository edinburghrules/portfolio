import { useEffect } from "react";
import "../styles/project/project.scss";
import previewIcon from "../assets/preview.svg";
import githubIcon from "../assets/github-icon.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Project = ({
  projectData: { title, techUsed, link, github, plug, gif, bgColors },
  index,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.6 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={{
        hidden: () => ({
          opacity: 0,
          y: 5,
        }),
        visible: () => ({
          opacity: 1,
          y: 0,
          transition: { delay: (index + 1) * 0.5 },
        }),
      }}
      initial="hidden"
      animate={controls}
      className="project"
      style={{
        background: `linear-gradient(${bgColors.light}, ${bgColors.dark})`,
      }}
    >
      <div className="project__content">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img className="project__gif" src={gif} alt={title} />
        </a>
        <div className="project__info">
          <span className="project__title">{title}</span>
          <div className="project__list">
            <ul>
              {techUsed.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className="project__plug">
            <p dangerouslySetInnerHTML={{ __html: plug }}></p>
          </div>
          <div className="project__btns">
            <a
              style={{ backgroundColor: `${bgColors.btn}` }}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="project__btn project__btn--preview"
            >
              <img
                className="project__btn-img"
                src={previewIcon}
                alt="preview project"
              />
              Preview
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="project__btn project__btn--github"
            >
              <img className="project__btn-img" src={githubIcon} alt="github" />
              Github repo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
