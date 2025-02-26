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
                As a Software Engineer on the Traxo project, I played a crucial
                role in developing custom Java parsers designed to optimize data
                processing workflows for an international client. My work
                involved designing and implementing efficient parsing algorithms
                to process diverse data inputs, ensuring high-quality, accurate
                data extraction. By focusing on enhancing the parser’s
                performance, I reduced processing time by 40% and boosted system
                performance by 50%, enabling real-time data processing
                capabilities. My contributions were critical to improving data
                reliability and scalability, which helped our client manage
                large volumes of data more efficiently. Additionally, I focused
                on continuous optimization, ensuring the system’s long-term
                sustainability and expanding its capacity to handle future data
                challenges. Through this work, I not only enhanced data
                processing workflows but also contributed to building a
                scalable, data-driven solution that significantly impacted the
                client’s operations on a global scale.{" "}
              </div>
            </div>
            <div className="wbi-secondcontainer">
              <div className="second-topcontainer">
                <div className="achievment-badge">
                  <div>Star Employee Of The Year 2022</div>
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
