import React from "react";
import "./work.css";
import CompanyLogo from "./riniratechnologies.png";

const Work = () => {
  return (
    <div id="work" className="w-main-container">
      <img
        src="/section.svg"
        alt="Education"
        width={1572}
        height={795}
        className="w-img-container"
      />
      <div className="w-top-container">
        <div className="w-t-header-container">
          <span className="w-t-header-text"></span>
          <span className="w-t-header-texts">WORK EXPERIENCE</span>
          <span className="w-t-header-text"></span>
        </div>
      </div>
      <div className="w-bottom-container">
        <div className="w-b-left-section">
          <div className="w-b-l-logo">
            <img
              className="company-logo-style"
              alt="Rinira"
              src={CompanyLogo}
            />
            <div className="company-logo-text">
              Rinira Technologies Pvt. Ltd.
            </div>
          </div>
        </div>
        <div className="w-b-right-section">
          <div className="wb-innercontainer">
            <div className="wbi-firstcontainer">
              <div className="company-header-text">
                Rinira Technologies Pvt. Ltd.
              </div>
              <div className="company-experience-container">
                <div className="company-subheader-container">
                  <div className="company-subheader-line"></div>
                  <div className="company-subheader-dot"></div>
                  <div className="company-subheader-line-bottom"></div>
                  <div className="company-designation-text">
                    Software Engineer
                  </div>
                  <div className="company-designation-year">
                    04/2021 - Present
                  </div>
                </div>
              </div>
              <div className="company-subheader-text">
                <br />
                <br />
                <div className="sub-header">
                  {" "}
                  Worked on multiple Projects during the timespan:-
                </div>
              </div>
              <div className="company-subheader-text">
                <div className="subheader-headerTexts">1. Traxo</div>
                As a Software Engineer in the Traxo project, I played a pivotal
                role in developing custom Java parsers, aimed at optimizing data
                processing workflows for an international client. Leveraging my
                expertise, I implemented robust parsing algorithms to
                effectively handle diverse data inputs, ensuring accurate
                information extraction. Through meticulous testing and
                debugging, I maintained parser reliability, significantly
                minimizing errors and enhancing the overall user experience.
                Notably, my efforts resulted in a remarkable 50% increase in
                system performance and a 40% reduction in processing time,
                thereby enabling real-time data processing capabilities.
                Furthermore, my ongoing support and optimization initiatives for
                the parsers have significantly contributed to the project's
                scalability and long-term sustainability. My work on the Traxo
                project has impacted the mass, facilitating efficient data
                processing solutions for our client on a global scale.{" "}
              </div>
            </div>
            <div className="wbi-secondcontainer">
              <div className="second-topcontainer">
                <div className="achievment-badge">
                  <div>Star Employee Of The Year 2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
