import React from "react";
import { personalData } from "../../data/personal-data";
import { Link } from "react-scroll";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import "./Home.css";

function Home() {
  return (
    <section className="hero-section">
      <div className="custom-divider">
        <div className="custom-divider-dot"></div>
        <div className="custom-divider-dot2"></div>
      </div>
      <img
        src="/hero.svg"
        alt="Hero"
        className="hero-background"
        width={1572}
        height={795}
      />

      <div className="hero-content">
        <div className="hero-info">
          <h1 className="hero-title">
            Hello, <br />
            This is <span className="highlight2">{personalData.name}</span>
            {` , I'm a Professional `}
            <span className="highlight">{personalData.designation}</span>.
          </h1>

          <div className="social-links">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <BsGithub color="#EC4899" />
            </a>
            <a
              href={personalData.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <BsLinkedin color="#EC4899" />
            </a>
            <a
              href={personalData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <RiInstagramFill color="#EC4899" />
            </a>
            <a
              href={`tel:${personalData.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <IoMdCall color="#EC4899" />
            </a>
            <a
              href={personalData.email}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <MdAlternateEmail color="#EC4899" />
            </a>
          </div>

          <div className="action-buttons">
            <Link href="#contact" className="contact-button">
              <button className="contact-button2">
                <span>Contact me</span>
                <RiContactsFill size={16} className="contact-button-icon" />
              </button>
            </Link>

            <a
              href={personalData.resume}
              target="_blank"
              download
              rel="noopener noreferrer"
              className="contact-button"
            >
              <button className="contact-button2 resume-button-temp">
                <span>Get Resume</span>
                <MdDownload size={16} className="resume-button-icon" />
              </button>
            </a>
          </div>
        </div>

        <div className="custom-container">
          <div className="code-custom-content">
            <div className="code-bulb">
              <div className="bulb-color red"></div>
              <div className="bulb-color orange"></div>
              <div className="bulb-color green"></div>
            </div>
          </div>
          <div className="custom-divider2">
            <div className="custom-divider-dot3"></div>
            <div className="custom-divider-dot4"></div>
          </div>
          <div className="code-content">
            <code className="code-input-container">
              <div className="blink">
                <span className="container1-span1">const</span>
                <span className="container1-span2">developer</span>
                <span className="container1-span3">=</span>
                <span className="container1-span4">{"{"}</span>
              </div>
              <div>
                <span className="container2-span1">Full Name:</span>
                <span className="container2-span2">{`'`}</span>
                <span className="container2-span3">Dhyey Modi</span>
                <span className="container2-span4">{`',`}</span>
              </div>
              <div className="container3">
                <span className="container3-span1">Skills:</span>
                <span className="container3-span2">{`['`}</span>
                <span className="container2-span3">Java</span>
                <span className="container3-span2">{"', '"}</span>
                <span className="container2-span3">React Native</span>
                <span className="container3-span2">{"', '"}</span>
                <span className="container2-span3">Redux</span>
                <span className="container3-span2">{"', '"}</span>
                <span className="container2-span3">C++</span>
                <span className="container3-span2">{"', '"}</span>
                <span className="container2-span3">TypeScript</span>
                <span className="container3-span2">{"', '"}</span>
                <span className="container2-span3">C</span>
                <span className="container3-span2">{"', '"}</span>
                <span className="container2-span3">HTML</span>
                <span className="container3-span2">{"', '"}</span>
                <span className="container2-span3">CSS</span>
                <span className="container3-span2">{"', '"}</span>
                <span className="container2-span3">MySQL</span>
                <span className="container3-span2">{"', '"}</span>
                <span className="container2-span3">MongoDB</span>
                <span className="container3-span2">{`']`}</span>
              </div>
              <div>
                <span className="container2-span1">HardWorker:</span>
                <span className="container4-span1">true</span>
                <span className="container2-span4">,</span>
              </div>
              <div>
                <span className="container2-span1">quickLearner:</span>
                <span className="container4-span1">true</span>
                <span className="container2-span4">,</span>
              </div>
              <div>
                <span className="container2-span1">problemSolver:</span>
                <span className="container4-span1">true</span>
                <span className="container2-span4">,</span>
              </div>
              <div>
                <span className="container2-span1">hireable:</span>
                <span className="container4-span1">function</span>
                <span className="container2-span4">{"() {"}</span>
              </div>
              <div>
                <span className="container5-span1">return</span>
                <span className="container2-span4">{`(`}</span>
              </div>
              <div>
                <span className="container6-span1">this.</span>
                <span className="container6-span2">hardWorker</span>
                <span className="container2-span3">&amp;&amp;</span>
              </div>
              <div>
                <span className="container6-span1">this.</span>
                <span className="container6-span2">problemSolver</span>
                <span className="container2-span3">&amp;&amp;</span>
              </div>
              <div>
                <span className="container6-span1">this.</span>
                <span className="container6-span2">skills.length</span>
                <span className="container6-span2 container2-span3">&gt;=</span>
                <span className="container4-span1">5</span>
              </div>
              <div>
                <span className="container7-span1">{`);`}</span>
              </div>
              <div>
                <span className="container7-span2">{`};`}</span>
              </div>
              <div>
                <span className="container2-span4">{`};`}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
