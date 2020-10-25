import React, { Component } from "react";
import { Element } from "react-scroll";
import Profile from "./components/Profile";
import Projects from "./components/Projects2";
import Experience from "./components/Experience";
import FloatingCircleNav from "./components/FloatingCircleNav2";
import Contact from "./components/Contact";
import Landing from "./components/Landing4";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { vhWidth: 0, vhHeight: 0, scrollHeight: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    // window.addEventListener("resize", this.updateWindowDimensions);
    window.addEventListener("scroll", this.updateWindowDimensions);
    console.log(this.state);
    console.log(document.documentElement.scrollHeight);
  }

  componentWillUnmount() {
    // window.removeEventListener("resize", this.updateWindowDimensions);
    window.removeEventListener("scroll", this.updateWindowDimensions);
    console.log(this.state);
    console.log(document.documentElement.scrollHeight);
  }

  updateWindowDimensions() {
    this.setState({
      vhWidth: window.innerWidth,
      vhHeight: window.innerHeight,
      scrollHeight: document.documentElement.scrollHeight,
    });
    console.log(this.state);
    console.log(document.documentElement.scrollHeight);
  }

  render() {
    console.log("env", process.env.REACT_APP_ENV);

    return (
      <div
        style={{
          position: "relative",
          height: "100%",
          // width: "100%",
          // backgroundColor: "red",
          // border: "5px solid red",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 45,
            top: this.state.vhHeight - 155,
            width: "15px",
            height: this.state.scrollHeight - this.state.vhHeight - 155,
            // backgroundColor: "red",
            zIndex: 999,
          }}
        >
          <div
            style={{
              position: "sticky",
              top: 200,
              width: "40px",
              height: "40px",
              // backgroundColor: "black",
            }}
          >
            <FloatingCircleNav />
          </div>
        </div>
        {/* {process.env.REACT_APP_ENV} */}
        <Element id="landing">
          <Landing />
        </Element>
        <div align="center">
          <Element id="profile">
            <Profile />
          </Element>
        </div>
        <div className="cover-body mx-auto">
          <div align="center">
            <Element id="projects">
              <Projects />
            </Element>
            <Element id="experience">
              <Experience />
            </Element>
          </div>

          <Element id="contact">
            <Contact />
          </Element>
        </div>
        {/* <FloatingNav /> */}
        {/* <FloatingCircleNav /> */}
        <Element id="bottom" />
      </div>
    );
  }
}

export default HomePage;
