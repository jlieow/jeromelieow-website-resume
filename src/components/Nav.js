import React, { Component } from "react";
import styled from "styled-components";

const Styles = styled.div
`
.nav-header {
  width: 100%;
  height: 70px;
  background-color: #333;
}

.nav-h3 {
  position: absolute;
  width: 200px;
  height: 70px;
  margin: 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.nav-ul {
  height: 70px;
  display: flex;
  width: auto;
  float: right;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.nav-li {
  display: inline-block;
  padding: 5px;
}

.nav-a {
  font-size: small;
  text-align: center;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
  background-color: transparent;
  border-bottom: 0.2rem solid transparent;
}

.nav-a:hover {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.25);
  border-bottom-color: rgba(255, 255, 255, 0.25);
}

.nav-active,
.nav-a:focus {
  text-decoration: none;
  color: #fff;
  border-bottom-color: white;
  border-bottom: 0.2rem solid white;
}

.nav-active:hover {
  text-decoration: none;
  color: #fff;
  border-bottom-color: rgba(255, 255, 255, 0.25);
}
`;

class NavBar extends Component {
  render() {
    return (
      <Styles>
        <header className="nav-header">
          <div className="cover-container mx-auto">
            <h3 className="nav-h3">Cover</h3>
            <nav>
              <ul className="nav-ul">
                <li className="nav-li">
                  <a className="nav-active" href="#news">
                    Home
                  </a>
                </li>
                <li className="nav-li">
                  <a className="nav-a" href="#contact">
                    Contact
                  </a>
                </li>
                <li className="nav-li">
                  <a className="nav-a" href="#about">
                    About
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </Styles>
    );
  }
}

export default NavBar;
