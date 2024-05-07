import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="main-div-container">
        <div className="navbar-header-text">
          <Link to="/" className="n-link-header">
            {`<DHYEY MODI/>`}
          </Link>
        </div>
        <ul className="navbar-list-container">
          <li>
            <Link to="about" className="n-link-tabs">
              <div className="n-link-tab-div">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link to="experience" className="n-link-tabs">
              <div className="n-link-tab-div">EXPERIENCE</div>
            </Link>
          </li>
          <li>
            <Link className="n-link-tabs">
              <div className="n-link-tab-div">SKILLS</div>
            </Link>
          </li>
          <li>
            <Link to="education" className="n-link-tabs">
              <div className="n-link-tab-div">EDUCATION</div>
            </Link>
          </li>
          <li>
            <Link to="projects" className="n-link-tabs">
              <div className="n-link-tab-div">PROJECTS</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
