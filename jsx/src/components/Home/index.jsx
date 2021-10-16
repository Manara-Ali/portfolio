// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS HERE
import Typical from "react-typical";

// 3. CREATE A FUNCTION COMPONENT
const Home = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div
            className="colz"
            style={{ width: "100%", margin: "auto", textAlign: "center" }}
          >
            <a href="https://www.linkedin.com/in/manara-ali/" target="_blank">
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCbuksGw2WY0eC0zbO5Jv8eQ"
              target="_blank"
            >
              <i className="fa fa-youtube-square"></i>
            </a>
            <div className="profile-details-name">
              <span className="primary-text">
                Hello I am <span className="highlighted-text">Manara Ali</span>
              </span>
            </div>
            <div className="profile-detail-role">
              <span className="primary-text">
                <h2>
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Dedicated",
                      2000,
                      "Hard working",
                      2000,
                      "Full Stack Developer",
                      2000,
                      "Java / SpringBoot",
                      2000,
                      "MERN",
                      2000,
                      "Git and Github Jedi",
                      2000,
                      "Nicknamed: Obi-wan Manara",
                      2000,
                    ]}
                  />
                </h2>
                <span className="profile role tagline">
                  I am an expert in Technology implementation, Workflow
                  improvement and Program Development.
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 4. EXPORT THAT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default Home;
