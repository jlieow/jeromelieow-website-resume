import React, { Component } from "react";
import Teamwork from "../assets/images/teamwork.png";
import styled from "styled-components";

const Styles = styled.div`
  .wrapper {
    width: 100%;
    position: relative;
    overflow: hidden;
  }
`;

class Landing extends Component {
  render() {
    return (
      <Styles>
        <div align="center" className="wrapper">
          <div
            align="center"
            style={{
              postion: "relative",
              width: "100%",
              height: "calc(100vh - 175px)",
              minWidth: "0",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                zIndex: "2",
                position: "absolute",
                width: "100%",
                top: "35%",
                overflow: "hidden",
              }}
            >
              <h1 style={{ fontSize: "100px" }}>Jerome Lieow</h1>
              <hr style={{ width: "50%", borderBottom: "2px solid white" }} />
              <p style={{ fontSize: "50px" }}>Portfolio Resume</p>
            </div>
            <img
              src={Teamwork}
              alt=""
              style={{
                display: "block",
                margin: "0 auto",
                width: "100%",
                minWidth: "1200px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                opacity: "0.5",
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
            />
          </div>
        </div>
      </Styles>
    );
  }
}

export default Landing;
