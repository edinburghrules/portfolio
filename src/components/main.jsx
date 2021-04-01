import "../styles/main/main.scss";
import portrait from "../assets/portrait.svg";
import jsIcon from "../assets/js-icon.png";
import reactIcon from "../assets/react-icon.png";
import reduxIcon from "../assets/redux-icon.png";
import sassIcon from "../assets/sass-icon.svg";
import firebaseIcon from "../assets/firebase-icon.png";
import figmaIcon from "../assets/figma-icon.png";

const Main = () => {
  return (
    <div className="main">
      <div className="main__column-left">
        <img
          className="main__portrait-img"
          src={portrait}
          alt="photo sean james adamson"
        />
      </div>
      <div className="main__column-right">
        <div className="main__header-text">
          <h1>
            Hi, I'm Sean and I'm a <br />
            <span>Junior Front End Developer</span>.
          </h1>
          <p>
            I'm Junior Front End Developer based in Dundee, Scotland. I have a
            degree in Web Development and Design and I have one year of
            experience creating web applications.
          </p>
          <p>Some of the tech I am comfortable using:</p>
          <ul>
            <li>
              Javascript <img className="main__tech-icon" src={jsIcon} />
            </li>
            <li>
              React <img className="main__tech-icon" src={reactIcon} />
            </li>
            <li>
              Redux <img className="main__tech-icon" src={reduxIcon} />
            </li>
            <li>
              Sass <img className="main__tech-icon" src={sassIcon} />
            </li>
            <li>
              Firebase <img className="main__tech-icon" src={firebaseIcon} />
            </li>
            <li>
              Figma <img className="main__tech-icon" src={figmaIcon} />
            </li>
          </ul>
          <div className="main__btns">
            <button className="main__btn main__btn--contact">Contact me</button>
            <button className="main__btn">Check out my work</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
