import React, { Component } from "react";
import SwiftTest from "../assets/images/swifttest_logo.png";
import SwiftMed from "../assets/images/swiftmed_logo.png";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

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
    display: flex-end;
    -ms-flex-wrap: wrap-reverse; /* IE10 */
    flex-wrap: wrap-reverse;
    max-width: 100%;
    // border: 1px solid red;
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

  .column-img {
    -ms-flex: 25%; /* IE10 */
    flex: 25%;
    max-width: 25%;
    min-width: 75px;
    text-align: right;
    float: left;
  }

  .column-details {
    -ms-flex: 75%; /* IE10 */
    flex: 75%;
    max-width: 75%;
    min-width: 300px;
    text-align: left;
    float: left;
    padding: 20px;
  }

  .column-img img {
    position: relative;
    vertical-align: middle;
    max-width: 75px;
    width: 100%;
    height: auto;
    border-radius: 20%;
    padding: 5px;
    // border: 5px solid white;
    -webkit-transition-duration: 0.5s; /* Safari */
    transition-duration: 0.5s;
  }

  .column-img img:hover {
    cursor: pointer;
    opacity: 0.6;
  }

  .column-img img:active {
    opacity: 0.3;
    -webkit-transition-duration: 0s; /* Safari */
    transition-duration: 0s;
  }

  [data-aos="animateFadeInUp"] {
    transform: translateY(-20%);
    opacity: 0;
    transition-property: transform, opacity;
    &.aos-animate {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;

class Projects extends Component {
  state = {
    projects: [
      {
        img: SwiftTest,
        imgLink: "",
        projectTitle: "SwiftTest",
        projectPeriod: "Aug 2020 - Present",
        description: "Android mobile application to manage COVID-19 swab.",
        tools: "Android Studios (Java), Google Firebase",
        link: "",
      },
      {
        img: SwiftMed,
        imgLink: "",
        projectTitle: "SwiftMED",
        projectPeriod: "Feb 2020 - Present",
        description:
          "Android mobile application to facilitate contact tracing through Bluetooth for the COVID-19 virus using the BlueTrace protocol.",
        tools: "Android Studios (Java), Google Firebase",
        link: "",
      },
    ],
  };

  componentDidMount() {
    Aos.init({ duration: 2000 });
  }

  componentDidUpdate() {
    Aos.refresh();
  }

  render() {
    return (
      <Styles>
        <div
          style={{
            width: "100%",
            // backgroundColor: "#DDBEA9",
            backgroundColor: "#fdfcfa",
            // borderTop: "5px solid black",
            // borderBottom: "5px solid black",
            paddingTop: "50px",
            paddingBottom: "50px",
          }}
        >
          <div data-aos="animateFadeInUp" data-aos-offset="300">
            <div
              style={{
                textAlign: "center",
                // padding: "10px",
                // border: "1px solid black",
              }}
            >
              <h3>Projects</h3>
            </div>
            <div>
              <div
                className="project-row"
                style={{
                  // border: "1px solid white",
                  paddingLeft: "60px",
                  paddingRight: "60px",
                }}
              >
                {this.state.projects.map((project) => {
                  return (
                    <div
                      key={project.projectTitle}
                      style={{
                        // border: "1px solid black",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div className="column-img">
                        <img
                          src={project.img}
                          alt=""
                          // style={{ border: "1px solid black" }}
                        />
                      </div>
                      <div
                        className="column-details"
                        style={{
                          // border: "1px solid black",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            // border: "1px solid black",
                            width: "100%",
                          }}
                        >
                          <h3>
                            <span
                              style={{
                                borderBottom: "2px solid black",
                              }}
                            >
                              {project.projectTitle}
                            </span>
                          </h3>
                          <h6>{project.projectPeriod}</h6>
                          <p>{project.description}</p>
                          <p>
                            <span>
                              <b>Built with: </b>
                            </span>
                            {project.tools}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Styles>
    );
  }
}

export default Projects;
