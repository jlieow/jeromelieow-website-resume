import React, { Component } from "react";
import { Link } from "react-scroll";
import { Button } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Puffin from "../assets/images/slider_puffin_before_mobile.png";
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
    padding-top: 25px;
    padding-bottom: 25px;
    // border: 1px solid black;
  }

  .experience-div {
    margin-top: 25px;
    margin-bottom: 25px;
    margin-left: 25px;
    margin-right: 25px;
  }

  .column-img {
    -ms-flex: 50%; /* IE10 */
    flex: 50%;
    max-width: 50%;
    text-align: center;
    float: left;
    padding: 20px;
  }

  .column-description {
    -ms-flex: 50%; /* IE10 */
    flex: 50%;
    max-width: 50%;
    text-align: left;
    float: left;
    padding: 20px;
  }

  .column-img img {
    vertical-align: middle;
    max-width: 400px;
    width: 100%;
    height: auto;
    border-radius: 0 100px 0 100px;
    padding: 10px;
    border: 10px solid black;
  }

  .row-buttons {
    position: relative;
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
    max-width: 1000px;
    width: 100%;
    // border: 1px solid blue;
  }

  .column-buttons {
    -ms-flex: 50%; /* IE10 */
    flex: 50%;
    max-width: 50%;
    text-align: center;
    float: left;
    // border: 1px solid blue;
  }

  .row-details {
    position: relative;
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
    max-width: 1000px;
    width: 100%;
    // border: 1px solid blue;
  }

  .column-details {
    -ms-flex: 50%; /* IE10 */
    flex: 50%;
    max-width: 50%;
    text-align: center;
    padding: 0px;
    // border: 1px solid blue;
  }

  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 1050px) {
    .column-buttons {
      -ms-flex: 100%; /* IE10 */
      flex: 100%;
      max-width: 100%;
      text-align: center;
      float: left;
      padding-top: 5px;
      padding-bottom: 5px;
      // border: 1px solid blue;
    }
  }

  @media screen and (max-width: 900px) {
    .row {
      display: -ms-flexbox; /* IE10 */
      display: flex;
      -ms-flex-wrap: wrap; /* IE10 */
      flex-wrap: wrap;
      max-width: 1000px;
    }

    .column-img {
      -ms-flex: 100%;
      flex: 100%;
      max-width: 100%;
      text-align: center;
      padding: 20px;
    }

    .column-description {
      -ms-flex: 100%;
      flex: 100%;
      max-width: 100%;
      text-align: center;
      padding: 20px;
    }

    .row-details {
      position: relative;
      display: -ms-flexbox; /* IE10 */
      display: flex;
      -ms-flex-wrap: wrap; /* IE10 */
      flex-wrap: wrap;
      max-width: 1000px;
      width: 100%;
      // border: 1px solid blue;
    }

    .column-details {
      -ms-flex: 100%; /* IE10 */
      flex: 100%;
      max-width: 100%;
      text-align: center;
      padding: 0px;
      // border: 1px solid blue;
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

  [data-aos="animateFadeInUp"] {
    transform: translateY(40%);
    opacity: 0;
    transition-property: transform, opacity;
    &.aos-animate {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#1769aa",
    },
  },
});

class Avatar extends Component {
  componentDidMount() {
    Aos.init({ duration: 2000 });
  }

  componentDidUpdate() {
    Aos.refresh();
  }

  render() {
    // const contentAboutMe =
    //   "An Avionics Engineer with a love for developing useful software. With a track record of building and delivering solutions while collaborating across multidiscplinary domains.\n\nCurrently with the Republic of Singapore Air Force.";
    const contentAboutMe =
      "I am Jerome, an avionics engineer in Singapore currently with the Republic of Singapore Air Force.\n\nI like going to the gym, travelling, investing, exploring new languages and building software.";

    return (
      <MuiThemeProvider theme={theme}>
        <Styles>
          {/* <div
          style={{
            height: "calc(100vh - 240px)",
            minHeight: "750px",
            border: "1px solid black",
            margin: "50px",
          }}
        > */}
          <div
            data-aos="animateFadeInUp"
            style={{
              // border: "1px solid black",
              marginLeft: "75px",
              marginRight: "75px",
            }}
          >
            <div className="row">
              <div
                className="column-img"
                style={{
                  // border: "1px solid black",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div style={{ width: "100%" }}>
                  <img src={Puffin} alt="" />
                </div>
              </div>
              <div
                className="column-description"
                style={{
                  // border: "1px solid black",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    // border: "1px solid red",
                    width: "100%",
                  }}
                >
                  <div>
                    {/* <div
                      className="row-details"
                      style={{
                        border: "1px solid black",
                      }}
                    >
                      <div
                        className="column-details"
                        style={{
                          // border: "1px solid black",
                          display: "flex",
                          alignItems: "center",
                          textAlign: "center",
                        }}
                      >
                        <div
                          style={{
                            // border: "1px solid red",
                            width: "100%",
                          }}
                        >
                          <h6>Name:</h6>
                          <p>Jerome Lieow</p>
                        </div>
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
                            // border: "1px solid red",
                            width: "100%",
                          }}
                        >
                          <h6>Location:</h6>
                          <p>Singapore</p>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div>
                    <p
                      style={{
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      {contentAboutMe}
                    </p>
                  </div>

                  <div className="row-buttons">
                    <div
                      className="column-buttons"
                      style={{
                        // border: "1px solid black",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          // border: "1px solid red",
                          width: "100%",
                          minWidth: "200px",
                        }}
                      >
                        <Link
                          to="bottom"
                          spy={true}
                          smooth={true}
                          duration={1400}
                        >
                          <Button
                            variant="contained"
                            color="secondary"
                            style={{ width: "200px" }}
                          >
                            Contact Me
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="column-buttons"
                      style={{
                        // border: "1px solid black",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          // border: "1px solid red",
                          width: "100%",
                          minWidth: "200px",
                        }}
                      >
                        <Link
                          to="bottom"
                          spy={true}
                          smooth={true}
                          duration={1400}
                        >
                          <Button
                            variant="contained"
                            color="secondary"
                            style={{ width: "200px" }}
                          >
                            Download Resume
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* <div
                    style={{
                      display: "inline-flex",
                      // border: "1px solid black",
                      width: "100%",
                      textAlign: "center",
                      position: "inherit",
                    }}
                  >
                    <div style={{ width: "50%", paddingRight: "5px" }}>
                      <Link
                        to="bottom"
                        spy={true}
                        smooth={true}
                        duration={1400}
                      >
                        <Button
                          variant="contained"
                          color="secondary"
                          style={{ width: "200px" }}
                        >
                          Contact Me
                        </Button>
                      </Link>
                    </div>
                    <div style={{ width: "50%", paddingLeft: "5px" }}>
                      <Link
                        to="bottom"
                        spy={true}
                        smooth={true}
                        duration={1400}
                      >
                        <Button
                          variant="contained"
                          color="secondary"
                          style={{ width: "200px" }}
                        >
                          Download Resume
                        </Button>
                      </Link>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </Styles>
      </MuiThemeProvider>
    );
  }
}

export default Avatar;
