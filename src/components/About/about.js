import React from "react";
import { personalData } from "../../data/personal-data";
import "./about.css";
import Profile2 from "./profile_pic.png";

const About = () => {
  return (
    <div id="about" className="aboutContainer">
      <div className="top-container">
        <div className="a-header-container">
          <span className="a-header-text"></span>
          <span className="a-header-texts">ABOUT ME</span>
          <span className="a-header-text"></span>
        </div>
      </div>
      <div className="below-container">
        <div className="right-section">
          <div className="image-container">
            <img src={Profile2} alt="Dhyey Modi" className="image-style" />
          </div>
        </div>
        <div className="left-section">
          <div className="sub-headercontainer">
            <p className="sub-headerText">Who I am?</p>
            <p className="description-text">{personalData.description}</p>
            <p className="description-text">{personalData.goals}</p>
            <p className="description-text">{personalData.extra_curricular}</p>
            <p className="description-text">{personalData.extra_curricular2}</p>
            <p className="description-text">{personalData.connect}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
