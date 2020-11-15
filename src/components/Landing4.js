import React, { Component } from "react";
import LandingBackground from "../assets/images/landingbackground.png";
import DownArrow from "../assets/images/down_arrow.png";
import styled from "styled-components";
import { Link } from "react-scroll";

const Styles = styled.div`
  .jumbo {
    background: url(${LandingBackground}) no-repeat fixed;
    background-size: cover;
    color: #ccc;
    height: 100vh;
    min-height: 400px;
    position: relative;
    z-index: 0;
  }

  .overlay {
    background-color: #000;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  .title-div {
    position: relative;
    width: 100%;
    height: 100%;
    display flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    z-index: 2;
    position: relative;
    padding-left: 50px;
    padding-right: 50px;
  }

  .title p {
    font-size: 6vh;
    color: white;
  }

  .title h1 {
    font-size: 12vh;
    color: white;
  }

  .stage-overlay {
    position: absolute;
    // top: 0;
    // left: 0;
    bottom: 0;
    right: 0;
  }

  .stage {
    display: flex;
    position: relative;
    bottom: 0;
    right: 0;
    // border: 10px solid white;
    margin-right: 150px;
    margin-bottom: 20px;
    width: 40px;
    height: auto;
    -webkit-transition-duration: 0.5s; /* Safari */
    transition-duration: 0.5s;
  }

  .stage:hover {
    opacity: 0.8;
  }

  .stage:active {
    opacity: 0.5;
    -webkit-transition-duration: 0s; /* Safari */
    transition-duration: 0s;
  }

  .box {
    align-self: flex-end;
    animation-iteration-count: infinite;
    width: 100%;
    height: auto;
    margin: 0 auto 0 auto;
    transform-origin: bottom;
    cursor: pointer;
  }

  .bounce {
    animation-duration: 2s;
    animation-name: bounce;
    animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
  }

  @keyframes bounce {
    0% {
      transform: scale(1, 1) translateY(0);
    }
    10% {
      transform: scale(1, 1) translateY(2px);
    }
    30% {
      transform: scale(1, 1) translateY(-40px);
    }
    50% {
      transform: scale(1, 1) translateY(0);
    }
    57% {
      transform: scale(1, 1) translateY(-4px);
    }
    64% {
      transform: scale(1, 1) translateY(0);
    }
    70% {
      transform: scale(1, 1) translateY(-2px);
    }
    75% {
      transform: scale(1, 1) translateY(0);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }

  .bounce-arrow {
    animation-duration: 2s;
    animation-name: bounce-arrow;
    animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
  }

  @keyframes bounce-arrow {
    0% {
      transform: scale(1, 1) translateY(0);
    }
    10% {
      transform: scale(1.1, 0.9) translateY(0);
    }
    30% {
      transform: scale(0.9, 1.1) translateY(-30px);
    }
    50% {
      transform: scale(1.05, 0.95) translateY(0);
    }
    57% {
      transform: scale(1, 1) translateY(-3px);
    }
    64% {
      transform: scale(1, 1) translateY(0);
    }
    70% {
      transform: scale(1, 1) translateY(-1px);
    }
    75% {
      transform: scale(1, 1) translateY(0);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }

  @media screen and (max-width: 895px) {
    .header {
      z-index: 2;
      position: absolute;
      width: 100%;
      top: 20%;
      overflow: hidden;
    }
  }

  @media screen and (max-width: 600px) {
    .stage-overlay {
      position: absolute;
      // top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }

    .stage {
      display: flex;
      position: relative;
      bottom: 0;
      right: 0;
      // border: 10px solid white;
      margin-right: 0px;
      margin-bottom: 20px;
      width: 40px;
      height: auto;
    }

    .header h1 {
      font-size: 12vh;
      color: white;
      text-align: center;
      // border: 1px solid white;
      padding-left: 40px;
      padding-right: 40px;
    }

    .header p {
      font-size: 6vh;
      color: white;
      text-align: center;
      // border: 1px solid white;
      padding-left: 40px;
      padding-right: 40px;
    }
  }
`;

class Landing extends Component {
  render() {
    return (
      <Styles>
        <div className="jumbo">
          <div align="center" />
          <div className="title-div">
            <div className="title">
              <h1>Jerome Lieow</h1>
              <hr style={{ borderBottom: "2px solid white" }} />
              <p>Engineer with a love for Software</p>
            </div>
          </div>

          <div
            className="stage-overlay"
            align="center"
            style={{ textAlign: "text-bottom" }}
          >
            <div className="stage">
              <Link
                to="profile"
                spy={true}
                smooth={true}
                offset={-295}
                duration={800}
              >
                <div
                  style={{
                    display: "flex",
                    align: "center",
                  }}
                >
                  <p
                    className="box bounce"
                    style={{ color: "white", marginBottom: "5px" }}
                  >
                    Explore
                  </p>
                </div>
                <img className="box bounce-arrow" src={DownArrow} />
              </Link>
            </div>
          </div>
        </div>
      </Styles>
    );
  }
}

export default Landing;
