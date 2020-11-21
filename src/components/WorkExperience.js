import { StepLabel } from "@material-ui/core";
import React, { Component } from "react";
import styled from "styled-components";

const Styles = styled.div`
  .column-left-title {
    // border: 1px solid white;
    -ms-flex: 10%; /* IE10 */
    flex: 10%;
    max-width: 10%;
    margin: 0 auto;
    text-align: center;
    // background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .column-right-title {
    // border: 1px solid white;
    -ms-flex: 90%; /* IE10 */
    flex: 90%;
    max-width: 90%;
    margin: 0 auto;
    text-align: left;
    border: 0px;
  }

  .row {
    position: relative;
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
    max-width: 100%;
    height: 100%;
    // border: 1px solid black;
  }

  .column-left {
    // border: 1px solid white;
    -ms-flex: 10%; /* IE10 */
    flex: 10%;
    max-width: 10%;
    margin: 0 auto;
    text-align: center;
    // background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .column-right {
    // border: 1px solid white;
    -ms-flex: 90%; /* IE10 */
    flex: 90%;
    max-width: 90%;
    margin: 0 auto;
    text-align: left;
    border: 0px;
  }
`;

class WorkExperience extends Component {
  state = {
    workExperiences: [
      {
        employer: "Ministry of Defence",
        title: "Avionics Engineer",
        startPeriod: "Feb 2019",
        endPeriod: "Present",
        location: "Singapore, SG",
        description:
          "Responsible for the airworthiness of the F-15SG's avionics and electrical system.",
        continuation: true,
      },
      {
        title: "Officer-in-Charge AH-64D Apache Fire Control System",
        startPeriod: "Jan 2017",
        endPeriod: "Feb 2019",
        location: "Singapore, SG",
        description:
          "Led a team of 7 radar and sensor technicians working to support aircraft recovery alongside different functional teams.",
        continuation: true,
      },
      {
        title:
          "Deputy Officer in Command of the Exercise Wallaby AH-64D Integrated Maintenance Flight",
        startPeriod: "Jan 2018",
        endPeriod: "Nov 2018",
        location: "Rockhampton, Australia",
        description:
          "Led a cross-functional team of 50 technicians across 3 bases to successfully provide the maintenance support of 4 AH-64Ds.",
        continuation: true,
      },
      {
        title: "Project Officer, Logistics Planning Branch",
        startPeriod: "Jul 2016",
        endPeriod: "Jan 2017",
        location: "Singapore, SG",
        description:
          "Responsible for the analysis of manpower and training data for forward planning, and development and exploration of automation tools.",
      },
    ],

    projects: [
      {
        title: "SwiftTest",
        startDate: "Aug 2020",
        endDate: "Present",
        description: ".",
        link: "",
      },
    ],
  };

  render() {
    return (
      <Styles>
        <div>
          <div style={{ textAlign: "center", padding: "10px" }}>
            <h3>Work Experience</h3>
          </div>
          {this.state.workExperiences.map((workExperience) => {
            const PeriodAndLocation =
              workExperience.startPeriod +
              " - " +
              workExperience.endPeriod +
              "\n" +
              workExperience.location;

            // console.log("continue", workExperience.continue);

            const continuation = workExperience.continuation ? "black" : "";
            const showEmployer = workExperience.employer ? "10px" : "";

            return (
              <div
                key={workExperience.title}
                style={{ textAlign: "left", margin: 0 }}
              >
                <div
                  className="row"
                  style={{
                    height: "100%",
                    width: "100%",
                    // border: "1px solid black",
                  }}
                >
                  <div className="column-left-title" />
                  <div className="column-right-title">
                    <div style={{ paddingBottom: showEmployer }}>
                      <h4 style={{ margin: 0 }}>
                        <span
                          style={{
                            borderBottom: "2px solid black",
                          }}
                        >
                          {workExperience.employer}
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    height: "100%",
                    width: "100%",
                    // border: "1px solid black",
                  }}
                >
                  <div className="column-left">
                    <div
                      style={{
                        position: "absolute",
                        top: 10,
                        height: "100%",
                        width: "2px",
                        backgroundColor: continuation,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        height: "10px",
                        width: "2px",
                        backgroundColor: !continuation,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 10,
                        borderRadius: 100,
                        border: "2px solid black",
                        padding: "1px",
                        height: "10px",
                        width: "10px",
                        backgroundColor: "white",
                      }}
                    />
                  </div>
                  <div className="column-right">
                    <h6>{workExperience.title}</h6>
                    <p style={{ whiteSpace: "pre-wrap" }}>
                      {PeriodAndLocation}
                    </p>
                    <p>{workExperience.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Styles>
    );
  }
}

export default WorkExperience;
