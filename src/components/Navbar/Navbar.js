import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar-container">
      <div className="main-div-container">
        <div className="navbar-header-text">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="n-link-header"
          >
            {`<DHYEY MODI/>`}
          </Link>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`menu-icon ${showMenu ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul className={`navbar-list-container ${showMenu ? "show" : ""}`}>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="n-link-tabs"
            >
              <div className="n-link-tab-div">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="n-link-tabs"
            >
              <div className="n-link-tab-div">SKILLS</div>
            </Link>
          </li>
          <li>
            <Link
              to="education"
              smooth={true}
              duration={500}
              className="n-link-tabs"
            >
              <div className="n-link-tab-div">EDUCATION</div>
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="n-link-tabs"
            >
              <div className="n-link-tab-div">EXPERIENCE</div>
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="n-link-tabs"
            >
              <div className="n-link-tab-div">PROJECTS</div>
            </Link>
          </li>
          <li>
            <Link
              to="contactus"
              smooth={true}
              duration={500}
              className="n-link-tabs"
            >
              <div className="n-link-tab-div">CONTACT US</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
