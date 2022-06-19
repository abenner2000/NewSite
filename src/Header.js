import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__titleSection">
        <p className="header__title">Andrew Benner</p>
      </div>
      <div className="header__nav">
        <div className="header__minititleSection">
          <Link to = "/">
            <p className="header__minititle">Home</p>
          </Link>
        </div>
        <div className="header__minititleSection">
          <Link to = "/experience">
            <p className="header__minititle">Experience</p>
          </Link>
        </div>
        <div className="header__minititleSection">
          <Link to = "/education">
            <p className="header__minititle">Education</p>
          </Link>
        </div>
        <div className="header__minititleSection">
          <Link to = "/projects">
            <p className="header__minititle">Projects</p>
          </Link>
        </div>
        <div className="header__minititleSection">
          <Link to = "/about">
            <p className="header__minititle">About Me</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
