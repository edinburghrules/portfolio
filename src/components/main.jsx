import "../styles/main/main.scss";
import portrait from "../assets/portrait.svg";
import cloud from "../assets/cloud.svg";

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
            I'm Junior Front End Developer based in Dundee, Scotland. I have two
            years experience creating web applications.
            <p>
              Some of the tech I have used: <span>React</span>,{" "}
              <span>Redux</span>, <span>Sass</span> and <span>Firebase</span>.
            </p>
            I am open for new opportunities and interesting projects.
          </p>
        </div>
        <div className="main__btns">
          <button className="main__btn main__btn--contact">Contact me</button>
          <button className="main__btn">Check my work</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
