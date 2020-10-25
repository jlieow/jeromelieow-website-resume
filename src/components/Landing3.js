import React, { Component } from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import Teamwork from "../assets/images/teamwork.png";
import styled from "styled-components";

const Styles = styled.div`
  .wrapper {
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .jumbo {
    backgroun-color: "";
    background: url(${Teamwork}) no-repeat fixed 0 -10px;
    background-size: cover;
    color: #ccc;
    height: calc(100vh - 175px);
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

class Landing extends Component {
  render() {
    return (
      <Styles>
        <div className="jumbo">
          <div align="center" className="overlay">
            <div
              style={{
                zIndex: "2",
                position: "absolute",
                width: "100%",
                top: "35%",
                overflow: "hidden",
              }}
            >
              <h1
                style={{
                  fontSize: "100px",
                  paddingLeft: "100px",
                  paddingRight: "100px",
                  color: "white",
                }}
              >
                Jerome Lieow
              </h1>
              <hr style={{ width: "50%", borderBottom: "2px solid white" }} />
              <p style={{ fontSize: "50px" }}>Portfolio Resume</p>
            </div>
          </div>
        </div>
      </Styles>
    );
  }
}

export default Landing;
