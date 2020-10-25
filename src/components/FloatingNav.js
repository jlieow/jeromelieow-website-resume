import React, { Component } from "react";
import styled from "styled-components";

const Styles = styled.div
`
.floating-vertical-container {
  width: 120px;
  position: fixed;
  bottom: 100px;
  right: 100px;
  z-index: 999;
  cursor: pointer;
}

.floating-vertical-container a {
  background-color: black;
  color: white;
  display: block;
  padding: 15px;
  text-align: center;
  text-decoration: none;
}

.floating-vertical-container .a-top {
  border-radius: 15px 15px 0 0;
  background-color: black;
  color: white;
  display: block;
  padding: 15px;
  text-align: center;
  text-decoration: none;
}

.floating-vertical-container .a-btm {
  border-radius: 0 0 15px 15px;
  background-color: black;
  color: white;
  display: block;
  padding: 15px;
  text-align: center;
  text-decoration: none;
}
`;

class FloatingNav extends Component {
  state = {};
  render() {
    return (
      <Styles>
        <div className="floating-vertical-container">
          <a className="a-top">Profile</a>
          <a>Projects</a>
          <a>Experiences</a>
          <a className="a-btm">Contact</a>
        </div>
      </Styles>
    );
  }
}

export default FloatingNav;
