import "../styles/main/main.scss";
import { motion } from "framer-motion";
import jsIcon from "../assets/js-icon.png";
import reactIcon from "../assets/react-icon.png";
import reduxIcon from "../assets/redux-icon.png";
import sassIcon from "../assets/sass-icon.svg";
import firebaseIcon from "../assets/firebase-icon.png";
import figmaIcon from "../assets/figma-icon.png";
import githubIcon from "../assets/github-icon.png";
import linkedinIcon from "../assets/linkedin-icon.png";
import codepenIcon from "../assets/codepen-icon.png";

const Main = () => {
  return (
    <motion.section
      id="main"
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 5 }}
      transition={{ duration: 0.5 }}
      className="main"
    >
      <div>
        <div className="main__social-links">
          <a
            className="navbar__social-link"
            href="https://github.com/edinburghrules"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="github" />
          </a>
          <a
            className="navbar__social-link"
            href="https://www.linkedin.com/in/sean-adamson-4883a1173/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="linkedin" />
          </a>
          <a
            className="navbar__social-link"
            href="https://codepen.io/edinburghrules"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={codepenIcon} alt="codepen" />
          </a>
        </div>
        <div className="main__header-text">
          <h1>
            Hi, I'm Sean and I'm a<span> Front End Developer</span>
          </h1>
          <p>
            I'm a Front End Developer with a degree in Web Development and
            Design and experience building web applications. I have a strong
            sense of visual design and understand the importance of good UX and
            UI practices.
          </p>
          <p>Some of the tech I am proficient with :</p>
          <ul>
            <li>
              Javascript{" "}
              <img className="main__tech-icon" src={jsIcon} alt="javascript" />
            </li>
            <li>
              React{" "}
              <img className="main__tech-icon" src={reactIcon} alt="react" />
            </li>
            <li>
              Redux{" "}
              <img className="main__tech-icon" src={reduxIcon} alt="redux" />
            </li>
            <li>
              Sass <img className="main__tech-icon" src={sassIcon} alt="sass" />
            </li>
            <li>
              Firebase{" "}
              <img
                className="main__tech-icon"
                src={firebaseIcon}
                alt="firebase"
              />
            </li>
            <li>
              Figma{" "}
              <img className="main__tech-icon" src={figmaIcon} alt="figma" />
            </li>
          </ul>
          <div className="main__btns">
            <a className="main__btn main__btn--contact" href="#contact">
              Contact me
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Main;
