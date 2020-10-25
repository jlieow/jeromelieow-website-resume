import React, { Component } from "react";
import SwiftTest from "../assets/images/swifttest_logo.png";
import SwiftMed from "../assets/images/swiftmed_logo.png";
import styled from "styled-components";

const Styles = styled.div`
  .project-icon {
    vertical-align: middle;
    width: 75px;
    height: auto;
    padding: -10px;
    border-radius: 20%;
    border: 5px solid white;
    background-color: white;
  }

  .project-row {
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap-reverse; /* IE10 */
    flex-wrap: wrap-reverse;
    max-width: 900px;
    border: 1px solid red;
  }

  .project-div {
    margin-top: 25px;
    margin-bottom: 25px;
    margin-left: 25px;
    margin-right: 25px;
  }

  .project-icon-column {
    // border: 1px solid white;
    -ms-flex: 50%; /* IE10 */
    flex: 50%;
    max-width: 50%;
    text-align: left;
    float: left;
  }

  .project-details-column {
    // border: 1px solid white;
    -ms-flex: 50%; /* IE10 */
    flex: 50%;
    max-width: 50%;
    text-align: left;
    float: left;
    padding: 10px;
  }
`;

class Projects extends Component {
  state = {
    projects: [
      {
        img: SwiftTest,
        projectTitle: "SwiftTest",
        projectPeriod: "Aug 2020 - Present",
        description: "Android mobile application to manage COVID-19 swab.",
        tools: "Tools used: Android Studios (Java), Google Firebase",
        link: "",
      },
      {
        img: SwiftMed,
        projectTitle: "SwiftMED",
        projectPeriod: "Feb 2020 - Present",
        description:
          "Android mobile application to facilitate contact tracing through Bluetooth for the COVID-19 virus using the BlueTrace protocol.",
        tools: "Tools used: Android Studios (Java), Google Firebase",
        link: "",
      },
    ],
  };

  render() {
    return (
      <Styles>
        <div>
          <div style={{ textAlign: "center", padding: "10px" }}>
            <h3>Projects</h3>
          </div>
          <div>
            <div className="project-row" style={{ border: "1px solid white" }}>
              {this.state.projects.map((project) => {
                return (
                  <div
                    key={project.projectTitle}
                    style={{ border: "1px solid black" }}
                  >
                    <div
                      className="project-icon-column"
                      style={{
                        border: "1px solid black",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <img
                          className="project-icon"
                          src={project.img}
                          style={{ margin: "10px" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="project-details-column"
                      style={{ border: "1px solid white" }}
                    >
                      <h3>{project.projectTitle}</h3>
                      <h6>{project.projectPeriod}</h6>
                      <p>{project.description}</p>
                      <p>{project.tools}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Styles>
    );
  }
}

export default Projects;
