import "../styles/navbar/navbar.scss";
import githubIcon from "../assets/github-icon.png";
import linkedinIcon from "../assets/linkedin-icon.png";
import codepenIcon from "../assets/codepen-icon.png";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="site logo" />
      </div>
      <div className="navbar__links">
        <a className="navbar__link" href="#">
          Work
        </a>
        <a href="#">Resume</a>
        <a href="#">Contact</a>
      </div>
      <div className="navbar__social-links">
        <a
          className="navbar__social-link"
          href="https://github.com/edinburghrules"
        >
          <img src={githubIcon} />
        </a>
        <a
          className="navbar__social-link"
          href="https://www.linkedin.com/in/sean-adamson-4883a1173/"
        >
          <img src={linkedinIcon} />
        </a>
        <a
          className="navbar__social-link"
          href="https://codepen.io/edinburghrules"
        >
          <img src={codepenIcon} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
