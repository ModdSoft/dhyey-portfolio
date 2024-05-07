import React from "react";
import "./experience.css";
import { experiences } from "./../../data/experience";
import AnimationLottie from "../../helper/animation-lottie";
import experience from "./../../animation/lottie/code.json";
import GlowCard from "../../helper/glow-card";
import { BsPersonWorkspace } from "react-icons/bs";

const Experience = () => {
  return (
    <div id="experience" className="main-container">
      <img
        src="/section.svg"
        alt="Experience"
        width={1572}
        height={795}
        className="img-container"
      />
      <div className="top-container">
        <div className="t-header-container">
          <span className="t-header-text"></span>
          <span className="t-header-texts">INTERNSHIPS</span>
          <span className="t-header-text"></span>
        </div>
      </div>

      <div className="bottom-container">
        <div className="b-container">
          <div className="b-top-container">
            <div className="animation-container">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>
          <div className="b-a-container">
            <div className="card-container">
              {experiences.map((experience) => (
                <GlowCard
                  key={experience.id}
                  identifier={`experience-${experience.id}`}
                >
                  <div className="card-main-container">
                    <img
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="image-card-container"
                    />
                    <div className="card-top-container">
                      <p className="card-t-text">{experience.duration}</p>
                    </div>
                    <div className="card-bottom-container">
                      <div className="b-cardtop">
                        {" "}
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="top-p-tab">{experience.title}</p>
                        <p className="bottom-p-tab">{experience.company}</p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
