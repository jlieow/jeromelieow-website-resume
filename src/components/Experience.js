import React, { Component } from "react";
import styled from "styled-components";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Aos from "aos";
import "aos/dist/aos.css";

const Styles = styled.div`
  .avatar-row {
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap-reverse; /* IE10 */
    flex-wrap: wrap-reverse;
    max-width: 1000px;
  }

  .experience-div {
    margin-top: 25px;
    margin-bottom: 25px;
    margin-left: 25px;
    margin-right: 25px;
  }

  .avatar-column-left {
    // border: 1px solid white;
    -ms-flex: 50%; /* IE10 */
    flex: 50%;
    max-width: 50%;
    text-align: left;
    float: left;
    padding-right: 50px;
    padding-left: 20px;
  }

  .avatar-column-right {
    // border: 1px solid white;
    -ms-flex: 50%; /* IE10 */
    flex: 50%;
    max-width: 50%;
    text-align: left;
    float: left;
    padding-left: 50px;
    padding-right: 20px;
  }

  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 800px) {
    .avatar-row {
      display: -ms-flexbox; /* IE10 */
      display: flex;
      -ms-flex-wrap: wrap; /* IE10 */
      flex-wrap: wrap;
      max-width: 1000px;
    }

    .avatar-column-left {
      -ms-flex: 100%;
      flex: 100%;
      max-width: 100%;
      text-align: center;
      padding: 0px;
    }

    .avatar-column-right {
      -ms-flex: 100%;
      flex: 100%;
      max-width: 100%;
      text-align: center;
      padding: 0px;
    }
  }

  @keyframes animatetop1 {
    from {
      top: 70%;
      transform: translateY(-70%);
      opacity: 0;
    }
    to {
      top: 50%;
      transform: translateY(-50%);
      opacity: 1;
    }
  }

  @keyframes animatetop2 {
    from {
      top: 30%;
      transform: translateY(-30%);
      opacity: 0;
    }
    to {
      top: 50%;
      transform: translateY(-50%);
      opacity: 1;
    }
  }

  [data-aos="animateFadeLeftRight"] {
    transform: translateX(-10%);
    opacity: 0;
    transition-property: transform, opacity;
    &.aos-animate {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  [data-aos="animateFadeRightLeft"] {
    transform: translateX(10%);
    opacity: 0;
    transition-property: transform, opacity;
    &.aos-animate {
      transform: translateX(0%);
      opacity: 1;
    }
  }
`;

class Experience extends Component {
  componentDidMount() {
    Aos.init({ duration: 2000 });
  }

  componentDidUpdate() {
    Aos.refresh();
  }

  render() {
    const offset = "230";
    return (
      <Styles>
        <div
          style={{
            backgroundColor: "#FFE8D6",
            paddingTop: "50px",
            paddingBottom: "50px",
            paddingLeft: "60px",
            paddingRight: "60px",
          }}
        >
          <div
            className="avatar-row"
            style={
              {
                // border: "1px solid black",
              }
            }
          >
            <div
              className="avatar-column-left"
              data-aos="animateFadeLeftRight"
              data-aos-offset={offset}
            >
              <WorkExperience />
            </div>
            <div
              className="avatar-column-right"
              data-aos="animateFadeRightLeft"
              data-aos-offset={offset}
            >
              <Education
                school="School of Hard Knocks"
                qualification="Knocking Hard"
                startYear="1000"
                endYear="2000"
                description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."
              />
            </div>
          </div>
        </div>
      </Styles>
    );
  }
}

export default Experience;
