import React from "react";
import "./footer.css";
import { personalData } from "../../data/personal-data";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="aboveText">© Portfolio Website For Dhyey Modi</div>
      <div className="belowText">
        View the code on{" "}
        <a
          href={personalData.portfoliogithub}
          target="_blank"
          rel="noopener noreferrer"
          className="linkingText"
        >
          <span className="linkText2">GitHub.</span>
        </a>
      </div>
      <div className="linkText">Made with ❤️ by Dhyey Modi</div>
      <div className="linkText3">
        All logos, trademarks, and brandnames are the property of their
        respective owners.
      </div>
    </div>
  );
};

export default Footer;
