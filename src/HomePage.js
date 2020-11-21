import React, { Component } from "react";
import { Element } from "react-scroll";
import Profile from "./components/Profile";
import Projects from "./components/Projects2";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import FloatingCircleNav from "./components/FloatingCircleNav2";
import Contact from "./components/Contact";
import Landing from "./components/Landing4";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vhWidth: 0,
      vhHeight: 0,
      scrollHeight: 0,
    };

    this.offset = {
      topOffset: 0,
      landingOffset: 0,
      profileOffset: -255,
      projectsOffset: -240,
      skillsOffset: -170,
      experienceOffset: -5,
      contactOffset: -800,
      bottomOffset: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    this.profileBackgroundColor = { backgroundColor: "#FFE8D6" };
    this.projectsBackgroundColor = { backgroundColor: "#fdfcfa" };
    this.skillsBackgroundColor = { backgroundColor: "#FFE8D6" };
    this.experienceBackgroundColor = { backgroundColor: "#fdfcfa" };
    this.contactBackgroundColor = { backgroundColor: "#FFE8D6" };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    window.addEventListener("scroll", this.updateWindowDimensions);
    // console.log(this.state);
    // console.log(document.documentElement.scrollHeight);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
    window.removeEventListener("scroll", this.updateWindowDimensions);
    // console.log(this.state);
    // console.log(document.documentElement.scrollHeight);
  }

  updateWindowDimensions() {
    this.setState({
      vhWidth: window.innerWidth,
      vhHeight: window.innerHeight,
      scrollHeight: document.documentElement.scrollHeight,
    });

    this.offset = {
      topOffset: 0,
      landingOffset: 0,
      profileOffset: -215,
      projectsOffset: -240,
      skillsOffset: -210,
      experienceOffset: 0,
      contactOffset: -800,
      bottomOffset: 0,
    };

    if (window.innerHeight < 925) {
      this.offset = {
        profileOffset: -150,
        projectsOffset: -160,
        skillsOffset: -80,
        experienceOffset: 0,
        contactOffset: -830,
        bottomOffset: -10,
      };
    }

    if (window.innerHeight < 870) {
      this.offset = {
        profileOffset: -230,
        projectsOffset: -160,
        skillsOffset: -50,
        experienceOffset: 0,
        contactOffset: -830,
        bottomOffset: -10,
      };
    }

    if (window.innerHeight < 835) {
      this.offset = {
        profileOffset: -220,
        projectsOffset: -160,
        skillsOffset: -40,
        experienceOffset: 0,
        contactOffset: -800,
        bottomOffset: -10,
      };
    }

    if (window.innerHeight < 800) {
      this.offset = {
        profileOffset: -200,
        projectsOffset: -120,
        skillsOffset: -30,
        experienceOffset: 0,
        contactOffset: -750,
        bottomOffset: -10,
      };
    }

    if (window.innerHeight < 750) {
      this.offset = {
        profileOffset: -170,
        projectsOffset: -100,
        skillsOffset: -5,
        experienceOffset: 0,
        contactOffset: -600,
        bottomOffset: -10,
      };
    }

    if (window.innerHeight < 700) {
      this.offset = {
        profileOffset: -170,
        projectsOffset: -70,
        skillsOffset: -40,
        experienceOffset: 0,
        contactOffset: -600,
        bottomOffset: -10,
      };
    }

    if (window.innerHeight < 600) {
      this.offset = {
        profileOffset: -150,
        projectsOffset: -20,
        skillsOffset: 0,
        experienceOffset: 0,
        contactOffset: -450,
        bottomOffset: -10,
      };
    }

    if (window.innerHeight < 560) {
      this.offset = {
        profileOffset: -150,
        projectsOffset: -5,
        skillsOffset: 0,
        experienceOffset: 0,
        contactOffset: -450,
        bottomOffset: -10,
      };
    }

    if (window.innerHeight < 535) {
      this.offset = {
        profileOffset: -130,
        projectsOffset: 0,
        skillsOffset: 0,
        experienceOffset: 0,
        contactOffset: -450,
        bottomOffset: -10,
      };
    }

    if (window.innerHeight < 500) {
      this.offset = {
        profileOffset: -110,
        projectsOffset: 0,
        skillsOffset: 0,
        experienceOffset: 0,
        contactOffset: -450,
        bottomOffset: -10,
      };
    }

    if (window.innerHeight < 490) {
      this.offset = {
        profileOffset: -20,
        projectsOffset: 0,
        skillsOffset: 0,
        experienceOffset: 0,
        contactOffset: -450,
        bottomOffset: -10,
      };
    }

    if (window.innerHeight < 460) {
      this.offset = {
        profileOffset: -10,
        projectsOffset: 0,
        skillsOffset: 0,
        experienceOffset: 0,
        contactOffset: -350,
        bottomOffset: -10,
      };
    }

    if (window.innerHeight < 360) {
      this.offset = {
        profileOffset: 30,
        projectsOffset: 0,
        skillsOffset: 10,
        experienceOffset: 0,
        contactOffset: -200,
        bottomOffset: -10,
      };
    }

    if (window.innerWidth < 400 && window.innerHeight < 600) {
      this.offset = {
        profileOffset: 0,
        projectsOffset: 0,
        skillsOffset: 20,
        experienceOffset: 10,
        contactOffset: -400,
        bottomOffset: -10,
      };
    }

    console.log(this.state);
    // console.log(document.documentElement.scrollHeight);
  }

  render() {
    // console.log("env", process.env.REACT_APP_ENV);
    const { skillsBackgroundColor } = this.state;

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
            top: this.state.vhHeight - 186,
            width: "15px",
            height: this.state.scrollHeight - this.state.vhHeight - 186,
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
            <FloatingCircleNav offset={this.offset} />
          </div>
        </div>
        {/* {process.env.REACT_APP_ENV} */}
        <Element id="landing">
          <Landing offset={this.offset} />
        </Element>
        <div align="center">
          <Element id="profile">
            <Profile backgroundColor={this.profileBackgroundColor} />
          </Element>
        </div>
        <div className="cover-body mx-auto">
          <div align="center">
            <Element id="projects">
              <Projects backgroundColor={this.projectsBackgroundColor} />
            </Element>
            <Element id="skills">
              <Skills backgroundColor={this.skillsBackgroundColor} />
            </Element>
            <Element id="experience">
              <Experience backgroundColor={this.experienceBackgroundColor} />
            </Element>
          </div>

          <Element id="contact">
            <Contact backgroundColor={this.contactBackgroundColor} />
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
