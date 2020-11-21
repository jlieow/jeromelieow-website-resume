import React, { Component } from "react";
import styled from "styled-components";
import Avatar from "./Avatar4";

const Styles = styled.div`
  .wrapper {
    width: 100%;
    position: relative;
    overflow: hidden;
  }
`;

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Styles>
        <div style={this.props.backgroundColor}>
          <div align="center" className="wrapper">
            <div
              align="center"
              style={{
                postion: "absolute",
                width: "100%",
                minWidth: "0",
                overflow: "hidden",
              }}
            >
              {/* <p
              style={{
                marginTop: "50px",
                marginBottom: "0",
                fontSize: "30px",
                paddingLeft: "100px",
                paddingRight: "100px",
              }}
            >
              "Alone we can do so little; together we can do so much." – Helen
              Keller
            </p> */}
              <Avatar />
            </div>
          </div>
        </div>
      </Styles>
    );
  }
}

export default Profile;
