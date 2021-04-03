import "../styles/project/project.scss";
import previewIcon from "../assets/preview.svg";
import githubIcon from "../assets/github-icon.png";

const Project = ({
  projectData: { title, techUsed, link, github, plug, gif },
}) => {
  console.log(title, gif);
  return (
    <div className="project">
      <div className="project__content">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img className="project__gif" src={gif} alt={title} />
        </a>
        <div className="project__info">
          <span className="project__title">{title}</span>
          <div className="project__list">
            <ul>
              {techUsed.map((tech) => (
                <li>{tech}</li>
              ))}
            </ul>
          </div>
          <div className="project__plug">
            <p dangerouslySetInnerHTML={{ __html: plug }}></p>
          </div>
          <div className="project__btns">
            <a
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
    </div>
  );
};

export default Project;
