import React, { Component } from "react";
import styled from "styled-components";
import Avatar from "./Avatar3";

const Styles = styled.div`
  .wrapper {
    width: 100%;
    position: relative;
    overflow: hidden;
  }
`;

class Profile extends Component {
  render() {
    return (
      <Styles>
        <div align="center" className="wrapper">
          <div
            align="center"
            style={{
              postion: "absolute",
              width: "100%",
              minWidth: "0",
              overflow: "hidden",
              backgroundColor: "#FFE8D6",
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
      </Styles>
    );
  }
}

export default Profile;