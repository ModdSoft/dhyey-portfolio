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
            <div className="project-header">Walmart Data Analysis</div>
            <div className="inside-bottom-container">
              <div className="p-b-left-container">
                <div className="inside-text1">
                  The objective was to analyze{" "}
                  <span className="inside-text1-emphasis">sales trends </span>,{" "}
                  <span className="inside-text1-emphasis">
                    customer behavior{" "}
                  </span>
                  and{" "}
                  <span className="inside-text1-emphasis">
                    revenue patterns{" "}
                  </span>
                  , to gain business insights. The project followed a structured
                  workflow, incorporating{" "}
                  <span className="inside-text1-emphasis">data extraction</span>
                  , <span className="inside-text1-emphasis">cleaning</span>,{" "}
                  <span className="inside-text1-emphasis">storage</span>,{" "}
                  <span className="inside-text1-emphasis">visualization</span>{" "}
                  and{" "}
                  <span className="inside-text1-emphasis">
                    dashboard creation
                  </span>
                  .
                  <br />
                  <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    1. Data Collection:{" "}
                  </span>
                  I obtained the Walmart dataset from Kaggle using the Kaggle
                  API in VS Code. The dataset contained transactional data from
                  multiple Walmart branches, including{" "}
                  <span className="inside-text1-emphasis">sales figures,</span>{" "}
                  <span className="inside-text1-emphasis">
                    customer demographics
                  </span>{" "}
                  and{" "}
                  <span className="inside-text1-emphasis">
                    product details.
                  </span>
                  <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    2. Data Cleaning & Preprocessing:{" "}
                  </span>
                  Once the data was extracted, I performed preprocessing in
                  Python using Pandas: <br />a{") "}Removed duplicates to ensure
                  data accuracy.
                  <br />b{") "}Handled missing values to prevent
                  inconsistencies.
                  <br />c{") "}Formatted the price column by removing dollar
                  signs and converting it to float for analysis.
                  <br />d{") "}Converted data types to ensure compatibility with
                  SQL and visualization tools.
                  <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    3. Storing Cleaned Data in MySQL:{" "}
                  </span>
                  After preprocessing, I stored the structured data in MySQL
                  using <span className="inside-text1-emphasis">pymysql</span>{" "}
                  and <span className="inside-text1-emphasis">SQLAlchemy</span>{" "}
                  to enable efficient querying and analysis.
                  <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    4. Data Visualization in Python:{" "}
                  </span>
                  To extract insights, I utilized Matplotlib and Seaborn for
                  visualization. <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    5. Business Insights Using MySQL:{" "}
                  </span>
                  I queried the MySQL database to answer key business questions,
                  such as:
                  <br />a{") "} What is the busiest day of the week for each
                  branch based on transaction volume?
                  <br />b{") "}How many transactions occur in each shift
                  (Morning, Afternoon, Evening) across branches?
                  <br />c{") "}What is the total profit for each category,
                  ranked from highest to lowest?
                  <br />d{") "}Which branches experienced the largest decrease
                  in revenue compared to the previous year?
                  <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    6. Interactive Dashboard in Power BI:{" "}
                  </span>
                  To enhance data-driven decision-making, I exported the MySQL
                  data to Power BI and created an interactive dashboard. <br />
                  <br />
                  <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    Key Takeaways & Impact:{" "}
                  </span>
                  <br />
                  1. Enhanced my expertise in data extraction, cleaning, SQL
                  querying, and visualization. <br />
                  2. Gained insights into Walmart's sales patterns, helping
                  understand branch-wise performance. <br />
                  3. Showcased the power of data-driven decision-making in
                  retail analytics. <br />
                  <br />
                  Tools Used: VS Code, Python, Jupyter Notebook, MySQL, Power
                  BI, Pandas, Matplotlib, Seaborn
                </div>
                <div className="button-containers">
                  <a
                    href={projectData.walmartGithub}
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
                <div className="p-img-top-container">
                  <img
                    src={Images.walmart_first}
                    alt="Main"
                    className="jjsg-main-img"
                  />
                  <img
                    src={Images.walmart_second}
                    alt="Main"
                    className="jjsg-main-img"
                  />
                  <img
                    src={Images.walmart_third}
                    alt="Main"
                    className="walmart-graph-img"
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
            <div className="project-header">
              Cricket Data Analysis : Best Playing XI from the 2022 World Cup
            </div>
            <div className="inside-bottom-container2">
              <div className="p-b-right-container">
                <div>
                  <img
                    src={Images.damain}
                    alt="JJSG-Admin"
                    className="jjsg-admin-img-style"
                  />
                </div>
                <div>
                  <img
                    src={Images.dasecond}
                    alt="JJSG-Admin"
                    className="jjsg-admin-img-style"
                  />
                </div>
                <div>
                  <img
                    src={Images.dathird}
                    alt="JJSG-Admin"
                    className="jjsg-admin-img-style"
                  />
                </div>
              </div>
              <div className="p-b-left-container">
                <div className="inside-text1">
                  I created a{" "}
                  <span className="inside-text1-emphasis">
                    comprehensive data analysis
                  </span>{" "}
                  project focused on the 2022 World Cup, where I aimed to
                  extract and analyze{" "}
                  <span className="inside-text1-emphasis">
                    player statistics
                  </span>{" "}
                  to conclude the best playing XI in cricket. The project
                  involved several key steps: <br />
                  <br />{" "}
                  <span className="inside-text1-emphasis2">
                    1.Data Collection:
                  </span>{" "}
                  I initiated the project by gathering data from the{" "}
                  <span className="inside-text1-emphasis">
                    ESPN Cricinfo website
                  </span>{" "}
                  , utilizing web scraping techniques. For this, I employed{" "}
                  <span className="inside-text1-emphasis">BrightData</span> to
                  efficiently extract match statistics, player performance data,
                  and other relevant metrics.
                  <br />
                  <span className="inside-text1-emphasis2">
                    2.Data Cleaning and Transformation:
                  </span>{" "}
                  Once the data was collected, I used{" "}
                  <span className="inside-text1-emphasis">Python</span> with the{" "}
                  <span className="inside-text1-emphasis">Pandas</span> library
                  for{" "}
                  <span className="inside-text1-emphasis">
                    data cleaning and transformation
                  </span>{" "}
                  with the . This process involved handling missing values,
                  removing duplicates, and ensuring the data was in a usable
                  format. I transformed the raw data into{" "}
                  <span className="inside-text1-emphasis">
                    structured tables
                  </span>{" "}
                  that included relevant statistics for each player.
                  <br />
                  <span className="inside-text1-emphasis2">
                    3.Data Export and Transformation in Power BI:
                  </span>{" "}
                  After cleaning the data, I exported the files to{" "}
                  <span className="inside-text1-emphasis">Power BI</span> for
                  further analysis. In Power BI, I performed additional data
                  transformation, ensuring that the data was organized for{" "}
                  <span className="inside-text1-emphasis">
                    effective modeling
                  </span>{" "}
                  and{" "}
                  <span className="inside-text1-emphasis">visualization</span> .
                  <br />
                  <span className="inside-text1-emphasis2">
                    4.Dashboard Creation:
                  </span>{" "}
                  With the data models in place, I designed and built an{" "}
                  <span className="inside-text1-emphasis">
                    interactive dashboard
                  </span>{" "}
                  in Power BI. This dashboard included various visualizations
                  such as{" "}
                  <span className="inside-text1-emphasis">
                    bar charts, scatter plots, and tables
                  </span>{" "}
                  , allowing for a comprehensive view of player performances
                  throughout the tournament.
                  <br />
                  <span className="inside-text1-emphasis2">
                    5.Insights Collection and Final Selection:
                  </span>{" "}
                  Finally, I{" "}
                  <span className="inside-text1-emphasis">
                    analyzed the insights
                  </span>{" "}
                  generated from the dashboard to evaluate player performances
                  based on various{" "}
                  <span className="inside-text1-emphasis">metrics</span> ,
                  including runs scored, wickets taken, and overall
                  contributions to their teams. Based on this analysis, I
                  selected my final XI players, highlighting their strengths and
                  contributions during the World Cup.
                  <br />
                  <br />
                  This project not only enhanced my{" "}
                  <span className="inside-text1-emphasis">
                    data analysis
                  </span>{" "}
                  skills but also provided valuable insights into player
                  performance, showcasing the power of{" "}
                  <span className="inside-text1-emphasis">
                    data-driven decision-making
                  </span>{" "}
                  in sports. I would like to thank{" "}
                  <span className="inside-text1-emphasis">CodeBasics</span> and{" "}
                  <span className="inside-text1-emphasis">Dhawal Sir</span> for
                  their insightful videos on data analysis and web scraping
                  techniques. Their content provided valuable guidance and
                  inspiration.
                  <br />
                  <br />
                </div>
                <div className="button-containers">
                  <a
                    href={projectData.worldcupGithub}
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
            <div className="project-header">Blinkit Outlet Analysis</div>
            <div className="inside-bottom-container">
              <div className="p-b-left-container">
                <div className="inside-text1">
                  The objective was to analyze{" "}
                  <span className="inside-text1-emphasis">sales trends </span>,{" "}
                  <span className="inside-text1-emphasis">
                    outlet performance{" "}
                  </span>
                  and{" "}
                  <span className="inside-text1-emphasis">product demand </span>
                  to gain business insights. The project followed a structured
                  workflow, incorporating{" "}
                  <span className="inside-text1-emphasis">data extraction</span>
                  , <span className="inside-text1-emphasis">cleaning</span>,{" "}
                  <span className="inside-text1-emphasis">storage</span>,{" "}
                  <span className="inside-text1-emphasis">visualization</span>{" "}
                  and{" "}
                  <span className="inside-text1-emphasis">
                    dashboard creation
                  </span>
                  to support Blinkit's rapid 10-minute grocery delivery model.
                  <br />
                  <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    1. Data Collection:{" "}
                  </span>
                  I obtained the Blinkit dataset, which contained data on{" "}
                  <span className="inside-text1-emphasis">sales figures,</span>{" "}
                  <span className="inside-text1-emphasis">
                    outlet locations
                  </span>{" "}
                  and{" "}
                  <span className="inside-text1-emphasis">
                    product details.
                  </span>
                  <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    2. Data Cleaning & Transformation:{" "}
                  </span>
                  Once the data was extracted, I performed preprocessing in
                  Python using Pandas: <br />a{") "}Removed duplicate entries to
                  ensure data accuracy.
                  <br />b{") "}Handled missing values to prevent
                  inconsistencies.
                  <br />c{") "}Standardized data types for compatibility with
                  SQL and Power BI.
                  <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    3. Advanced Data Analysis & Machine Learning:{" "}
                  </span>
                  <br />a{") "}Sales Prediction for New Outlets (Regression
                  Model)
                  <br />
                  •Predicted sales for new Blinkit outlets based on location,
                  size, and type.
                  <br />
                  •Trained a Linear Regression, Random Forest, and XGBoost
                  model.
                  <br />
                  •Evaluated performance using R² score and RMSE.
                  <br />b{") "}Product Demand Clustering (K-Means Clustering)
                  <br />
                  •Grouped outlets based on similar sales behavior.
                  <br />
                  •Helped optimize inventory management and marketing
                  strategies.
                  <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    4. Interactive Dashboard in Power BI:{" "}
                  </span>
                  To present findings effectively, I created an interactive
                  Power BI dashboard.
                  <br />
                  <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    Key Takeaways & Impact:{" "}
                  </span>
                  <br />
                  1. Strengthened my expertise in data extraction, cleaning, SQL
                  querying, machine learning, and visualization. <br />
                  2. Gained valuable insights into Blinkit’s store performance
                  and inventory management. <br />
                  3. Showcased the role of data-driven decision-making in
                  optimizing Blinkit’s operations. <br />
                  <br />
                  Tools Used: VS Code, Python, Jupyter Notebook, MySQL, Power
                  BI, Pandas, NumPy, scikit-learn, XGBoost, Matplotlib, Seaborn
                </div>
                <div className="button-containers">
                  <a
                    href={projectData.blinkitGithub}
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
                <div className="p-img-top-container">
                  <img
                    src={Images.blinkit_first}
                    alt="Main"
                    className="jjsg-main-img"
                  />
                  <img
                    src={Images.blinkit_second}
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
            <div className="project-header">
              Jai Jai ShriGokulesh (User App + Admin App)
            </div>
            <div className="inside-bottom-container2">
              <div className="p-b-right-container">
                <div>
                  <img
                    src={Images.jjsgmultiscreen}
                    alt="Main"
                    className="jjsg-main-img"
                  />
                </div>
                <div>
                  <img
                    src={Images.jjsgAdmin}
                    alt="Main"
                    className="jjsg-main-img"
                  />
                </div>
                <div>
                  <img
                    src={Images.jjsgside}
                    alt="Main"
                    className="jjsg-main-img"
                  />
                </div>
                <div>
                  <img
                    src={Images.jjsgmain}
                    alt="Main"
                    className="jjsg-main-img"
                  />
                </div>
              </div>
              <div className="p-b-left-container">
                <div className="inside-text1">
                  A <span className="inside-text1-emphasis">community app</span>{" "}
                  for the Jai Jai ShriGokulesh community designed to enhance the
                  community's{" "}
                  <span className="inside-text1-emphasis">engagement</span> and{" "}
                  <span className="inside-text1-emphasis">connectivity</span>.
                  <br />
                  <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    1. Community-Centric Marketplace:
                  </span>{" "}
                  The app serves as a dedicated marketplace for the{" "}
                  <span className="inside-text1-emphasis">
                    community's products
                  </span>
                  , making it convenient for members to purchase goods
                  seamlessly.
                  <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    2. Event Section:
                  </span>{" "}
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
                  for a recap.
                  <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    3. Gallery Section:
                  </span>{" "}
                  An interactive space within the app where users can explore a
                  rich collection of{" "}
                  <span className="inside-text1-emphasis">
                    images and videos
                  </span>{" "}
                  capturing memorable moments from community events,
                  celebrations, and gatherings.
                  <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    4. Automated Birthday Wishes:
                  </span>{" "}
                  A thoughtful feature that{" "}
                  <span className="inside-text1-emphasis">
                    automatically generates
                  </span>{" "}
                  and sends birthday wishes to users in the form of{" "}
                  <span className="inside-text1-emphasis">customized PDFs</span>
                  , enhancing{" "}
                  <span className="inside-text1-emphasis">
                    personal connections
                  </span>{" "}
                  within the community.
                  <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    5. Chatbot Support:
                  </span>{" "}
                  A{" "}
                  <span className="inside-text1-emphasis">
                    user-friendly chatbot
                  </span>{" "}
                  is integrated into the app to address queries and{" "}
                  <span className="inside-text1-emphasis">
                    provide assistance
                  </span>
                  .
                  <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    6. History Section:
                  </span>{" "}
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
                    7. Volunteering Opportunities:
                  </span>{" "}
                  The app facilitates community involvement by allowing users to{" "}
                  <span className="inside-text1-emphasis">easily apply</span>{" "}
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
                  <br />
                  <br />
                  The admin app for the Jai Jai Shri Gokulesh community provides{" "}
                  <span className="inside-text1-emphasis">
                    powerful tools
                  </span>{" "}
                  for{" "}
                  <span className="inside-text1-emphasis">
                    seamless management
                  </span>{" "}
                  and <span className="inside-text1-emphasis">engagement</span>.
                  <br />
                  <br />
                  Administrators can efficiently oversee{" "}
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
                  and{" "}
                  <span className="inside-text1-emphasis">
                    enhanced engagement
                  </span>
                  .
                  <br />
                  <br />
                </div>
                <div className="button-containers">
                  <a
                    href={projectData.jjsgUserPlayStore}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="p-button-style">
                      <span className="p-buttonText">
                        USER APP
                        <CiSaveUp1 className="p-logo-style" size={40} />
                      </span>
                    </button>
                  </a>
                  <a
                    href={projectData.jjsgAdminPlayStore}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="p-button-style">
                      <span className="p-buttonText">
                        ADMIN APP
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
            <div className="project-header">
              Atharava Vidyalaya (Student's App + Teacher's App)
            </div>
            <div className="inside-bottom-container">
              <div className="p-b-left-container">
                <div className="inside-text1">
                  The Atharava Vidyalaya Students App is a{" "}
                  <span className="inside-text1-emphasis">
                    comprehensive mobile{" "}
                  </span>{" "}
                  application designed to{" "}
                  <span className="inside-text1-emphasis">streamline</span> and{" "}
                  <span className="inside-text1-emphasis">enhance </span>the
                  educational experience for students, teachers, and parents at
                  Atharava Vidyalaya. Developed using{" "}
                  <span className="inside-text1-emphasis">React Native</span>,
                  the app serves as a{" "}
                  <span className="inside-text1-emphasis">
                    multifunctional tool
                  </span>{" "}
                  that integrates essential school activities into a
                  user-friendly digital platform.
                  <br />
                  <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    1. Attendance Tracking:{" "}
                  </span>
                  Easily mark and monitor student attendance, ensuring{" "}
                  <span className="inside-text1-emphasis">
                    accurate records{" "}
                  </span>
                  and{" "}
                  <span className="inside-text1-emphasis">prompt updates </span>
                  for parents.
                  <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    2. Homework Assignments:{" "}
                  </span>
                  Teachers can assign homework directly through the app, and
                  students can{" "}
                  <span className="inside-text1-emphasis">
                    track their assignments{" "}
                  </span>
                  and <span className="inside-text1-emphasis">deadlines </span>
                  effortlessly. <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    3. Notifications:{" "}
                  </span>
                  Stay informed with{" "}
                  <span className="inside-text1-emphasis">
                    real-time notifications{" "}
                  </span>
                  about important announcements, school events, and updates.
                  <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    4. Circulars:{" "}
                  </span>
                  Access school{" "}
                  <span className="inside-text1-emphasis">
                    circulars digitally
                  </span>{" "}
                  ensuring that important information is always at your{" "}
                  <span className="inside-text1-emphasis">fingertips.</span>
                  <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    5. Fee Management:{" "}
                  </span>
                  Parents can view and manage school{" "}
                  <span className="inside-text1-emphasis">fee payments</span>{" "}
                  through the app, making{" "}
                  <span className="inside-text1-emphasis">
                    financial transactions{" "}
                  </span>
                  convenient and transparent.
                  <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    6. Exam Schedules:{" "}
                  </span>
                  Students can check their{" "}
                  <span className="inside-text1-emphasis">
                    exam timetables{" "}
                  </span>
                  and{" "}
                  <span className="inside-text1-emphasis">
                    receive reminders
                  </span>{" "}
                  to stay prepared.
                  <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    7. Activity Tracking:{" "}
                  </span>
                  Keep track of{" "}
                  <span className="inside-text1-emphasis">
                    school activities
                  </span>{" "}
                  and{" "}
                  <span className="inside-text1-emphasis">
                    extracurricular events
                  </span>
                  , promoting holistic development.
                  <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    8. Gallery:{" "}
                  </span>
                  Explore a vibrant collection of images{" "}
                  <span className="inside-text1-emphasis">
                    capturing memorable moments{" "}
                  </span>{" "}
                  from school events and activities.
                  <br />
                  <span className="inside-text1-emphasis inside-text1-highlight">
                    8. Birthday Notifications:{" "}
                  </span>
                  Receive automated{" "}
                  <span className="inside-text1-emphasis">
                    birthday wishes{" "}
                  </span>
                  , fostering a sense of community and celebration within the
                  school.
                  <br />
                  <br />
                  The app offers personalized content tailored to each student's
                  class, providing a customized learning journey that caters to
                  individual needs and preferences. With a focus on usability
                  and accessibility, the app features an intuitive interface
                  that makes navigation easy for users of all ages. Its clean
                  and responsive design ensures a seamless experience on any
                  device. Since its launch, the Atharava Vidyalaya Students App
                  has garnered positive feedback from both students and
                  teachers. With over 2000+ daily active users, the app has
                  significantly improved communication and engagement within the
                  school community. While the app currently meets the essential
                  needs of the school, we are committed to continuously
                  improving and evolving the platform based on user feedback and
                  emerging technological trends.
                </div>
                <br />
                <div className="inside-text1">
                  The teachers' app for Atharava Vidyalaya offers{" "}
                  <span className="inside-text1-emphasis">robust tools </span>{" "}
                  for{" "}
                  <span className="inside-text1-emphasis">
                    efficient school management{" "}
                  </span>{" "}
                  and{" "}
                  <span className="inside-text1-emphasis">communication</span>.{" "}
                  <br />
                  <br /> Administrators and teachers can effortlessly
                  <span className="inside-text1-emphasis">
                    {" "}
                    manage student data{" "}
                  </span>
                  ,
                  <span className="inside-text1-emphasis">
                    {" "}
                    track attendance{" "}
                  </span>
                  ,
                  <span className="inside-text1-emphasis">
                    {" "}
                    assign homework{" "}
                  </span>
                  , and communicate with parents. The app ensures secure access,
                  allowing only authorized staff to view and update information.
                  <br />
                  <br />
                  Additionally, it enables{" "}
                  <span className="inside-text1-emphasis">
                    sending notifications
                  </span>{" "}
                  directly to students and parents, ensuring and{" "}
                  <span className="inside-text1-emphasis">
                    timely communication
                  </span>{" "}
                  and{" "}
                  <span className="inside-text1-emphasis">
                    enhanced engagement
                  </span>{" "}
                  within the school community.
                </div>
                <div className="button-containers">
                  <a
                    href={projectData.atharavaStudentPlayStore}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="p-button-style">
                      <span className="p-buttonText">
                        STUDENT APP
                        <CiSaveUp1 className="p-logo-style" size={40} />
                      </span>
                    </button>
                  </a>
                  <a
                    href={projectData.atharavaTeacherPlayStore}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="p-button-style">
                      <span className="p-buttonText">
                        TEACHER APP
                        <CiSaveUp1 className="p-logo-style" size={40} />
                      </span>
                    </button>
                  </a>
                </div>
              </div>
              <div className="p-b-right-container">
                <div className="p-img-top-container">
                  <img
                    src={Images.avstudents}
                    alt="Main"
                    className="jjsg-main-img"
                  />
                  <img
                    src={Images.avteacher}
                    alt="Main"
                    className="jjsg-main-img"
                  />
                  <img
                    src={Images.avfirst}
                    alt="Main"
                    className="jjsg-main-img"
                  />
                  <img
                    src={Images.avsecond}
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
            <div className="project-header">Atharava Vidyalaya (Website)</div>
            <div className="inside-bottom-container2">
              <div className="p-b-right-container">
                <div className="img-right-container">
                  <img
                    src={Images.avwebsite}
                    className="image-right"
                    alt="Website-SS"
                  />
                </div>
              </div>
              <div className="p-b-left-container">
                <div className="inside-text1">
                  The Atharava Vidyalaya website, built using{" "}
                  <span className="inside-text1-emphasis">React JS</span>,{" "}
                  serves as a{" "}
                  <span className="inside-text1-emphasis">dynamic </span> and{" "}
                  <span className="inside-text1-emphasis">responsive </span>
                  digital platform for the school community. <br />
                  <br /> It provides comprehensive information about the school,
                  including academic programs, events, news, and announcements.
                  The website's
                  <span className="inside-text1-emphasis">
                    {" "}
                    intuitive design{" "}
                  </span>
                  ensures
                  <span className="inside-text1-emphasis">
                    {" "}
                    easy navigation{" "}
                  </span>
                  and
                  <span className="inside-text1-emphasis"> accessibility </span>
                  for students, parents, and staff, enhancing their experience
                  and engagement with the school. With real-time updates and a
                  user-friendly interface, the website is an essential resource
                  for staying connected with the latest happenings at Atharava
                  Vidyalaya.
                  <br />
                </div>
                <div className="button-containers">
                  <a
                    href={projectData.atharavaWebsite}
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
                    href={projectData.websiteGithub}
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
