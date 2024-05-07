import React from "react";
import Wave from "./Wave.tsx";
import "./Projects.css";
import { CiSaveUp1 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Images from "../../images/index.js";
import { projectData } from "../../data/projects.js";

const Projects = () => {
  return (
    <div id="projects" className="projectContainer">
      <div className="p-header-container">
        <div className="p-header-container2">
          <span className="p-header-subtext"></span>
          <span className="p-header-text">PROJECTS</span>
          <span className="p-header-subtext2"></span>
        </div>
      </div>
      <Wave color="#070422">
        <div className="wave-container">
          <div className="inside-container">
            <div className="project-header">
              Jai Jai ShriGokulesh (User App)
            </div>
            <div className="inside-bottom-container">
              <div className="p-b-left-container">
                <div className="inside-text1">
                  A{" "}
                  <span className="inside-text1-emphasis">community app </span>{" "}
                  for the Jai Jai ShriGokulesh community designed to enhance the
                  community's{" "}
                  <span className="inside-text1-emphasis">engagement</span> and{" "}
                  <span className="inside-text1-emphasis">connectivity</span>.
                  <br />
                  <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    1. Community-Centric Marketplace:{" "}
                  </span>
                  The app serves as a dedicated marketplace for the{" "}
                  <span className="inside-text1-emphasis">
                    community's products
                  </span>
                  , making it convenient for members to purchase goods
                  seamlessly.
                  <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    2. Event Section:{" "}
                  </span>
                  A dynamic section where users can discover{" "}
                  <span className="inside-text1-emphasis">past</span>,{" "}
                  <span className="inside-text1-emphasis">live</span> and{" "}
                  <span className="inside-text1-emphasis">upcoming events</span>
                  , including details such as{" "}
                  <span className="inside-text1-emphasis">location</span>,{" "}
                  <span className="inside-text1-emphasis">date</span>, and{" "}
                  <span className="inside-text1-emphasis">live status</span> if
                  applicable. After the event, users can access a gallery
                  featuring{" "}
                  <span className="inside-text1-emphasis">
                    images and videos
                  </span>{" "}
                  for a recap. <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    3. Gallery Section:{" "}
                  </span>
                  An interactive space within the app where users can explore a
                  rich collection of{" "}
                  <span className="inside-text1-emphasis">
                    images and videos
                  </span>
                  capturing memorable moments from community events,
                  celebrations, and gatherings.
                  <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    3. Automated Birthday Wishes:{" "}
                  </span>
                  A thoughtful feature that{" "}
                  <span className="inside-text1-emphasis">
                    automatically generates
                  </span>{" "}
                  and sends birthday wishes to users in the form of
                  <span className="inside-text1-emphasis">customized PDFs</span>
                  , enhancing{" "}
                  <span className="inside-text1-emphasis">
                    personal connections
                  </span>{" "}
                  within the community.
                  <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    4. Chatbot Support:{" "}
                  </span>
                  A{" "}
                  <span className="inside-text1-emphasis">
                    user-friendly chatbot
                  </span>{" "}
                  is integrated into the app to address queries and{" "}
                  <span className="inside-text1-emphasis">
                    provide assistance
                  </span>
                  <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    5. History Section:{" "}
                  </span>
                  An educational component that offers insights into the{" "}
                  <span className="inside-text1-emphasis">
                    community's rich history
                  </span>
                  , highlighting significant{" "}
                  <span className="inside-text1-emphasis">
                    individuals and places
                  </span>{" "}
                  of historical importance.
                  <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    6. Volunteering Opportunities:{" "}
                  </span>
                  The app facilitates community involvement by allowing users to
                  <span className="inside-text1-emphasis">
                    easily apply
                  </span>{" "}
                  for volunteering opportunities, fostering a spirit of{" "}
                  <span className="inside-text1-emphasis">
                    service and collaboration
                  </span>
                  .
                  <br />
                  <br />
                  With its diverse range of features catering to various aspects
                  of community life, your app serves as a valuable tool for
                  fostering connection, engagement, and growth within the Jai
                  Jai Shri Gokulesh community.
                </div>
                <div className="button-containers">
                  <a
                    href={projectData.jjsgUserPlayStore}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="p-button-style">
                      <span className="p-buttonText">
                        LIVE PROJECT
                        <CiSaveUp1 className="p-logo-style" size={40} />
                      </span>
                    </button>
                  </a>
                </div>
              </div>
              <div className="p-b-right-container">
                <div className="p-img-top-container">
                  <img
                    src={Images.jjsgmultiscreen}
                    alt="Main"
                    className="jjsg-main-img"
                  />
                  <img
                    src={Images.jjsgside}
                    alt="Main"
                    className="jjsg-main-img"
                  />
                  <img
                    src={Images.jjsgmain}
                    alt="Main"
                    className="jjsg-main-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wave>
      <div>
        <div className="wave-container2">
          <div className="inside-container">
            <div className="project-header">Jai Jai ShriGokulesh (Admin)</div>
            <div className="inside-bottom-container2">
              <div className="p-b-right-container">
                <div>
                  <img
                    src={Images.jjsgAdmin}
                    alt="JJSG-Admin"
                    className="jjsg-admin-img-style"
                  />
                </div>
              </div>
              <div className="p-b-left-container">
                <div className="inside-text1">
                  The admin app for the Jai Jai Shri Gokulesh community provides{" "}
                  <span className="inside-text1-emphasis">powerful tools </span>{" "}
                  for{" "}
                  <span className="inside-text1-emphasis">
                    seamless management{" "}
                  </span>{" "}
                  and <span className="inside-text1-emphasis">engagement</span>.{" "}
                  <br />
                  <br /> Administrators can efficiently oversee{" "}
                  <span className="inside-text1-emphasis">
                    community operations
                  </span>
                  ,{" "}
                  <span className="inside-text1-emphasis">manage products</span>
                  , <span className="inside-text1-emphasis">events</span>,{" "}
                  <span className="inside-text1-emphasis">user data</span>, and
                  also ensure that{" "}
                  <span className="inside-text1-emphasis">only users</span> from
                  the community have access to the user app.
                  <br />
                  <br />
                  Additionally, they can send notifications directly to users
                  from the{" "}
                  <span className="inside-text1-emphasis">admin app</span> to
                  the <span className="inside-text1-emphasis">user app</span>{" "}
                  with a single click ensuring{" "}
                  <span className="inside-text1-emphasis">
                    timely communication
                  </span>{" "}
                  and
                  <span className="inside-text1-emphasis">
                    enhanced engagement
                  </span>
                  .
                </div>
                <div className="button-containers">
                  <a
                    href={projectData.jjsgAdminPlayStore}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="p-button-style">
                      <span className="p-buttonText">
                        LIVE PROJECT
                        <CiSaveUp1 className="p-logo-style" size={40} />
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Wave color="#070422">
        <div className="wave-container">
          <div className="inside-container">
            <div className="project-header">Rattler Rush</div>
            <div className="inside-bottom-container">
              <div className="p-b-left-container">
                <div className="inside-text1">
                  Reviving the essence of the{" "}
                  <span className="inside-text1-emphasis">
                    beloved classic{" "}
                  </span>
                  , our Snake Game brings back the joy of simple yet{" "}
                  <span className="inside-text1-emphasis">
                    addictive gameplay
                  </span>
                  .
                  <br />
                  <br /> Navigate your snake through{" "}
                  <span className="inside-text1-emphasis">
                    colorful and vibrant landscapes
                  </span>
                  , reminiscent of the past while embracing the excitement of
                  the present.
                  <br />
                  <br />
                  It's a{" "}
                  <span className="inside-text1-emphasis">modern twist</span>,
                  on a timeless favorite, offering endless entertainment for
                  players of all ages.
                </div>
                <div className="button-containers">
                  <a
                    href={projectData.ratlerRushPlayStore}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="p-button-style">
                      <span className="p-buttonText">
                        LIVE PROJECT
                        <CiSaveUp1 className="p-logo-style" size={40} />
                      </span>
                    </button>
                  </a>
                  <a
                    href={projectData.ratlerRushGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="p-button-style">
                      <span className="p-buttonText">
                        SOURCE CODE
                        <FaGithub className="p-logo-style" size={40} />
                      </span>
                    </button>
                  </a>
                </div>
              </div>
              <div className="p-b-right-container">
                <div>
                  <img
                    src={Images.rattlerRush}
                    alt="RattlerRush"
                    className="jjsg-main-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wave>
      <div>
        <div className="wave-container2">
          <div className="inside-container">
            <div className="project-header">Fun ABC Learning for Kids</div>
            <div className="inside-bottom-container2">
              <div className="p-b-right-container">
                <div>
                  <img
                    src={Images.kidsApp}
                    alt="JJSG-Admin"
                    className="jjsg-admin-img-style"
                  />
                </div>
              </div>
              <div className="p-b-left-container">
                <div className="inside-text1">
                  A delightful game designed for our{" "}
                  <span className="inside-text1-emphasis">
                    little learners!
                  </span>
                  <br />
                  <br />
                  This simple yet engaging game offers kids a{" "}
                  <span className="inside-text1-emphasis">
                    playful environment
                  </span>{" "}
                  to grasp the fundamentals of the alphabet.
                  <br />
                </div>
                <div className="button-containers">
                  <a
                    href={projectData.kidsPlayStore}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="p-button-style">
                      <span className="p-buttonText">
                        LIVE PROJECT
                        <CiSaveUp1 className="p-logo-style" size={40} />
                      </span>
                    </button>
                  </a>
                  <a
                    href={projectData.kidsGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="p-button-style">
                      <span className="p-buttonText">
                        SOURCE CODE
                        <FaGithub className="p-logo-style" size={40} />
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Wave color="#070422">
        <div className="wave-container">
          <div className="inside-container">
            <div className="project-header">This Website</div>
            <div className="inside-bottom-container">
              <div className="p-b-left-container">
                <div className="inside-text1">
                  My portfolio website build with{" "}
                  <span className="inside-text1-emphasis">React.</span>
                  <br />
                  <br /> The source code is written in{" "}
                  <span className="inside-text1-emphasis">
                    100% JavaScript
                  </span>{" "}
                  and the project is easy to maintain. The source code is very{" "}
                  <span className="inside-text1-emphasis">moduler</span>{" "}
                  allowing easy{" "}
                  <span className="inside-text1-emphasis">debugging</span>.
                  <br />
                  <br />
                  Animations are done using two{" "}
                  <span className="inside-text1-emphasis">svg files</span> and
                  the{" "}
                  <span className="inside-text1-emphasis">lottie files</span>.
                </div>
                <div className="button-containers">
                  <a
                    href={projectData.websiteLive}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="p-button-style">
                      <span className="p-buttonText">
                        LIVE PROJECT
                        <CiSaveUp1 className="p-logo-style" size={40} />
                      </span>
                    </button>
                  </a>
                  <a
                    href={projectData.websiteLive}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="p-button-style">
                      <span className="p-buttonText">
                        SOURCE CODE
                        <FaGithub className="p-logo-style" size={40} />
                      </span>
                    </button>
                  </a>
                </div>
              </div>
              <div className="p-b-right-container">
                <div className="img-right-container">
                  <img
                    src={Images.website}
                    className="image-right"
                    alt="Website-SS"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wave>
    </div>
  );
};

export default Projects;
