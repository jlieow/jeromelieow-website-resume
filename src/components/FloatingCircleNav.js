import React, { Component } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const Styles = styled.div`
  .floating-container {
    position: fixed;
    bottom: 0px;
    right: calc(25% - 20%);
    z-index: 999;
    padding-left: 300px;
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
    background-color: grey;
    cursor: pointer;
  }

  .floating-ul li:hover {
    background-color: grey;
    border: 2px solid white;
  }

  .floating-ul li:active {
    background-color: grey;
    border: 2px solid white;
  }

  .active {
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: grey;
    border: 2px solid white;
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
        this.setState({ top: state });
        break;

      case "landing":
        this.setState({ top: state });
        break;

      case "profile":
        this.setState({ top: !state });
        this.setState({ profile: state });
        break;

      case "projects":
        this.setState({ projects: state });
        break;

      case "experience":
        this.setState({ experience: state });
        break;

      case "contact":
        this.setState({ experience: !state });
        this.setState({ contact: state });
        break;

      case "bottom":
        this.setState({ experience: !state });
        this.setState({ contact: state });
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
    return (
      <Styles>
        <div className="floating-container">
          <ul className="floating-ul">
            <Link
              to="top"
              spy={true}
              smooth={true}
              duration={300}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
            >
              <li style={{ border: this.state.top ? "2px solid white" : "" }} />
            </Link>
            <Link
              to="landing"
              spy={true}
              smooth={true}
              duration={300}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
            />
            <Link
              to="profile"
              spy={true}
              smooth={true}
              offset={-215}
              duration={300}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
            >
              <li
                style={{ border: this.state.profile ? "2px solid white" : "" }}
              />
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-5}
              duration={300}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
            >
              <li
                style={{ border: this.state.projects ? "2px solid white" : "" }}
              />
            </Link>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-5}
              duration={300}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
            >
              <li
                style={{
                  border: this.state.experience ? "2px solid white" : "",
                }}
              />
            </Link>
            <Link
              to="contact"
              spy={true}
              offset={-900}
              smooth={true}
              duration={300}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
            />
            <Link
              to="bottom"
              spy={true}
              smooth={true}
              duration={300}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
            >
              <li
                style={{ border: this.state.contact ? "2px solid white" : "" }}
              />
            </Link>
          </ul>
        </div>
      </Styles>
    );
  }
}

export default FloatingCircleNav;
