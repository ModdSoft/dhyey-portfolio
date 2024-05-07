import React from "react";
import "./education.css";
import { education } from "./../../data/education";
import AnimationLottie from "../../helper/animation-lottie";
import lottieFile from "./../../animation/lottie/study.json";
import GlowCard from "../../helper/glow-card";
import { BsPersonWorkspace } from "react-icons/bs";

const Education = () => {
  return (
    <div id="education" className="e-main-container">
      <div className="e-top-container">
        <div className="e-t-header-container">
          <span className="e-t-header-text"></span>
          <span className="e-t-header-texts">EDUCATION</span>
          <span className="e-t-header-text"></span>
        </div>
      </div>
      <img
        src="/section.svg"
        alt="Education"
        width={1572}
        height={795}
        className="e-img-container"
      />
      <div className="e-bottom-container">
        <div className="e-b-container">
          <div className="e-b-top-container">
            <div className="e-animation-container">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>
          <div>
            <div className="e-card-container">
              {education.map((experience) => (
                <GlowCard
                  key={experience.id}
                  identifier={`experience-${experience.id}`}
                >
                  <div className="e-card-main-container">
                    <img
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="e-image-card-container"
                    />
                    <div className="e-card-top-container">
                      <p className="e-card-t-text">{experience.duration}</p>
                    </div>
                    <div className="e-card-bottom-container">
                      <div className="e-b-cardtop">
                        {" "}
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="e-top-p-tab">{experience.title}</p>
                        <p className="e-bottom-p-tab">{experience.company}</p>
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

export default Education;
