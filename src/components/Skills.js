import React, { Component } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

const Styles = styled.div`
  .row {
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
    max-width: 1000px;
    padding-top: 50px;
    padding-bottom: 50px;
    // border: 1px solid black;
    justify-content: center;
    align-items: center;
  }

  .column {
    -ms-flex: 15%; /* IE10 */
    flex: 15%;
    max-width: 15%;
    justify-content: center;
    align-items: center;
    // border: 1px solid black;
  }

  .wrapper {
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .margin20 {
    margin-top: 20px;
    margin-down: 20px;
  }

  .margin100 {
    margin: 100px;
  }

  [data-aos="animateFadeLeftRight"] {
    transform: translateX(-2000%);
    opacity: 0;
    transition-property: transform, opacity;
    &.aos-animate {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  [data-aos="animateFadeRightLeft"] {
    transform: translateX(2000%);
    opacity: 0;
    transition-property: transform, opacity;
    &.aos-animate {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  [data-aos="animateFadeInUp"] {
    transform: translateY(40%);
    opacity: 0;
    transition-property: transform, opacity;
    &.aos-animate {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  @media screen and (max-width: 1200px) {
    .row {
      display: -ms-flexbox; /* IE10 */
      display: flex;
      -ms-flex-wrap: wrap; /* IE10 */
      flex-wrap: wrap;
      max-width: 1000px;
    }

    .column {
      -ms-flex: 30%;
      flex: 30%;
      max-width: 30%;
      text-align: center;
      padding: 20px;
    }
  }

  @media screen and (max-width: 800px) {
    .row {
      display: -ms-flexbox; /* IE10 */
      display: flex;
      -ms-flex-wrap: wrap; /* IE10 */
      flex-wrap: wrap;
      max-width: 1000px;
      padding-top: 0px;
      padding-bottom: 0px;
      margin: 0px;
    }

    .column {
      -ms-flex: 100%;
      flex: 100%;
      max-width: 100%;
      text-align: center;
      padding: 20px;
    }
  }
`;

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vhWidth: 0,
      LeftRight1: "800",
      LeftRight2: "500",
      LeftRight3: "300",
      LeftRight4: "200",
      LeftRight5: "100",
      LeftRight6: "0",
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    // window.addEventListener("scroll", this.updateWindowDimensions);
    // console.log(this.state);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
    // window.removeEventListener("scroll", this.updateWindowDimensions);
    // console.log(this.state);
  }

  updateWindowDimensions() {
    this.setState({
      vhWidth: window.innerWidth,
      LeftRight1: "800",
      LeftRight2: "500",
      LeftRight3: "300",
      LeftRight4: "200",
      LeftRight5: "100",
      LeftRight6: "0",
    });

    if (window.innerWidth < 1200) {
      this.setState({
        vhWidth: window.innerWidth,
        LeftRight1: "200",
        LeftRight2: "100",
        LeftRight3: "0",
        LeftRight4: "200",
        LeftRight5: "100",
        LeftRight6: "0",
      });
    }
    if (window.innerWidth < 800) {
      this.setState({
        vhWidth: window.innerWidth,
        LeftRight1: "0",
        LeftRight2: "0",
        LeftRight3: "0",
        LeftRight4: "0",
        LeftRight5: "0",
        LeftRight6: "0",
      });
    }
    // console.log(this.state);
  }

  render() {
    return (
      <Styles>
        <div align="center" className="wrapper">
          <div style={this.props.backgroundColor}>
            <div
              align="center"
              style={{
                postion: "absolute",
                width: "100%",
                minWidth: "0",
                overflow: "hidden",
              }}
            >
              <div>
                <div
                  style={{
                    // border: "1px solid black",
                    marginTop: "50px",
                    marginBottom: "50px",
                    marginLeft: "75px",
                    marginRight: "75px",
                  }}
                >
                  <h3 data-aos="animateFadeInUp" data-aos-offset="300">
                    Skills
                  </h3>
                  <div className="row">
                    <div
                      className="column"
                      data-aos="animateFadeLeftRight"
                      data-aos-delay={this.state.LeftRight1}
                    >
                      Java
                    </div>
                    <div
                      className="column"
                      data-aos="animateFadeLeftRight"
                      data-aos-delay={this.state.LeftRight2}
                    >
                      Python
                    </div>
                    <div
                      className="column"
                      data-aos="animateFadeLeftRight"
                      data-aos-delay={this.state.LeftRight3}
                    >
                      JavaScript
                    </div>
                    <div
                      className="column"
                      data-aos="animateFadeLeftRight"
                      data-aos-delay={this.state.LeftRight4}
                    >
                      HTML/CSS
                    </div>
                    <div
                      className="column"
                      data-aos="animateFadeLeftRight"
                      data-aos-delay={this.state.LeftRight5}
                    >
                      C/C++
                    </div>
                    <div
                      className="column"
                      data-aos="animateFadeLeftRight"
                      data-aos-delay={this.state.LeftRight6}
                    >
                      Dart
                    </div>
                  </div>

                  <hr
                    style={{
                      borderBottom: "1px solid #808080",
                      maxWidth: "1000px",
                    }}
                  />
                  <h3 data-aos="animateFadeInUp">Languages</h3>
                  <div className="row">
                    <div
                      className="column"
                      data-aos="animateFadeRightLeft"
                      data-aos-delay="0"
                    >
                      <p>English</p>
                      <p
                        style={{
                          marginBottom: "0",
                        }}
                      >
                        Native
                      </p>
                    </div>
                    <div
                      className="column"
                      data-aos="animateFadeRightLeft"
                      data-aos-delay="100"
                    >
                      <p>Mandarin</p>
                      <p
                        style={{
                          marginBottom: "0",
                        }}
                      >
                        Advanced
                      </p>
                    </div>
                    <div
                      className="column"
                      data-aos="animateFadeRightLeft"
                      data-aos-delay="200"
                    >
                      <p>Spanish</p>
                      <p
                        style={{
                          marginBottom: "0",
                        }}
                      >
                        Conversational
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Styles>
    );
  }
}

export default Skills;
