import { Link } from "react-router";
import { dungeons } from "../../data/Dungeons.js";
import { raids } from "../../data/Raids";
import { resources } from "../../data/OtherResources";
import "../../App.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg foreground-color">
        <div className="container-fluid">
          <a className="navbar-brand">
            <Link className="link" to="/">
              The Archives
            </Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {/* <a className="nav-link active" aria-current="page" href="#"> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dungeons
                </a>
                <ul className="dropdown-menu">
                  {dungeons.map((dungeon, index) => {
                    return (
                      <li key={index}>
                        <a className="dropdown-item">
                          <Link
                            className="link"
                            to={`/DungeonAndRaids/Dungeons/${dungeon.name}`}
                          >
                            {dungeon.name}
                          </Link>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Raids
                </a>
                <ul className="dropdown-menu">
                  {raids.map((raids, index) => {
                    return (
                      <li key={index}>
                        <a className="dropdown-item">
                          <Link
                            className="link"
                            to={`/DungeonAndRaids/Raids/${raids.name}`}
                          >
                            {raids.name}
                          </Link>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link className="link" to="/UsefulResources">
                    Useful Resources
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link className="link" to="/ContactPage">
                    Contact Me
                  </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
