import React from "react";
import "./skills.css";
import Marquee from "react-fast-marquee";
import { skillsData } from "../../data/skills";
import { skillsImage } from "../../data/skill-image";

const Skills = () => {
  return (
    <div id="skills" className="skills-main-container">
      <img
        src="/section.svg"
        alt="Experience"
        width={1572}
        height={295}
        className="skills-img-container"
      />
      <div className="skills-top-container">
        <div className="skills-header-container">
          <span className="skills-header-text"></span>
          <span className="skills-header-texts">SKILLS</span>
          <span className="skills-header-text"></span>
        </div>
      </div>

      <div className="skills-bottom-container">
        <div className="skill-inner-container">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {" "}
            {skillsData.map((skill, id) => (
              <div className="skill-img-container" key={id}>
                <div className="skill-img-inner-container">
                  <div className="s-inner-first-container">
                    <div className="s-f-first-cont">
                      <div className="s-f-f-innerstyle" />
                    </div>
                  </div>
                  <div className="s-inner-second-container">
                    <div className="s-s-first-cont">
                      <img
                        src={skillsImage(skill)}
                        alt={skill}
                        width={70}
                        height={70}
                        className="skill-inner-image"
                      />
                    </div>
                    <p className="s-s-second-cont">{skill}</p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <div />
    </div>
  );
};

export default Skills;
