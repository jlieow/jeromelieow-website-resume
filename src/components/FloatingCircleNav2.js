import React, { Component } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const Styles = styled.div`
  .floating-container {
    position: sticky;
    z-index: 999;
  }

  .floating-ul {
    list-style: none;
    padding: 0;
    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: center;
  }

  .floating-ul li {
    width: 15px;
    height: 15px;
    margin-bottom: 15px;
    border-radius: 100%;
    background-color: white;
    cursor: pointer;
    border: 2px solid #333;
  }

  .floating-ul li:hover {
    // background-color: white;
    // border: 2px solid red;
    opacity: 0.2 !important;
  }

  .floating-ul li:active {
    background-color: grey;
    // border: 2px solid red;
    opacity: 0.2;
  }

  .active {
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: grey;
    // border: 2px solid red;
  }

  .not-active {
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: grey;
  }
`;

class FloatingCircleNav extends Component {
  state = {
    top: false,
    profile: false,
    projects: false,
    experience: false,
    contact: false,
  };

  handleSetActive = (e) => {
    const state = true;

    console.log(e);

    switch (e) {
      case "top":
        this.setState({
          top: state,
          profile: !state,
          projects: !state,
          experience: !state,
          contact: !state,
        });
        break;

      case "landing":
        this.setState({
          top: state,
          profile: !state,
          projects: !state,
          experience: !state,
          contact: !state,
        });
        break;

      case "profile":
        this.setState({
          top: !state,
          profile: state,
          projects: !state,
          experience: !state,
          contact: !state,
        });
        break;

      case "projects":
        this.setState({
          top: !state,
          profile: !state,
          projects: state,
          experience: !state,
          contact: !state,
        });
        break;

      case "experience":
        this.setState({
          top: !state,
          profile: !state,
          projects: !state,
          experience: state,
          contact: !state,
        });
        break;

      case "contact":
        this.setState({
          top: !state,
          profile: !state,
          projects: !state,
          experience: !state,
          contact: state,
        });
        break;

      case "bottom":
        this.setState({
          top: !state,
          profile: !state,
          projects: !state,
          experience: !state,
          contact: state,
        });
        break;

      default:
        break;
    }
  };

  handleSetInactive = (e) => {
    console.log(e);
    const state = false;

    switch (e) {
      case "top":
        this.setState({ top: state });
        break;

      case "profile":
        this.setState({ profile: state });
        break;

      case "projects":
        this.setState({ projects: state });
        break;

      case "experience":
        this.setState({ experience: state });
        break;

      case "contact":
        this.setState({ contact: state });
        break;

      default:
        break;
    }
  };

  render() {
    const circleStyle = "";
    const circleOpacity = "0.2";

    return (
      <Styles>
        <div className="floating-container">
          <ul className="floating-ul">
            <Link
              to="top"
              spy={true}
              smooth={true}
              duration={800}
              onSetActive={this.handleSetActive}
              // onSetInactive={this.handleSetInactive}
            >
              <li
                style={{
                  border: this.state.top ? circleStyle : "",
                  opacity: this.state.top ? circleOpacity : 1,
                }}
              />
            </Link>
            <Link
              to="landing"
              spy={true}
              smooth={true}
              duration={300}
              onSetActive={this.handleSetActive}
              // onSetInactive={this.handleSetInactive}
            />
            <Link
              to="profile"
              spy={true}
              smooth={true}
              offset={-295}
              duration={800}
              onSetActive={this.handleSetActive}
              // onSetInactive={this.handleSetInactive}
            >
              <li
                style={{
                  border: this.state.profile ? circleStyle : "",
                  opacity: this.state.profile ? circleOpacity : 1,
                }}
              />
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-300}
              duration={800}
              onSetActive={this.handleSetActive}
              // onSetInactive={this.handleSetInactive}
            >
              <li
                style={{
                  border: this.state.projects ? circleStyle : "",
                  opacity: this.state.projects ? circleOpacity : 1,
                }}
              />
            </Link>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-5}
              duration={800}
              onSetActive={this.handleSetActive}
              // onSetInactive={this.handleSetInactive}
            >
              <li
                style={{
                  border: this.state.experience ? circleStyle : "",
                  opacity: this.state.experience ? circleOpacity : 1,
                }}
              />
            </Link>
            <Link
              to="contact"
              spy={true}
              offset={-800}
              smooth={true}
              duration={300}
              onSetActive={this.handleSetActive}
              // onSetInactive={this.handleSetInactive}
            />
            <Link
              to="bottom"
              spy={true}
              smooth={true}
              duration={1400}
              onSetActive={this.handleSetActive}
              // onSetInactive={this.handleSetInactive}
            >
              <li
                style={{
                  border: this.state.contact ? circleStyle : "",
                  opacity: this.state.contact ? circleOpacity : 1,
                }}
              />
            </Link>
          </ul>
        </div>
      </Styles>
    );
  }
}

export default FloatingCircleNav;
