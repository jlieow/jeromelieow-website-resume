import React, { Component } from "react";
import LinkedIn from "../assets/images/linkedin-icon.png";
import Facebook from "../assets/images/facebook-icon.png";
import Instagram from "../assets/images/instagram-icon.png";
import Email from "../assets/images/email-icon.png";
import Github from "../assets/images/github-icon.png";
import styled from "styled-components";

const Styles = styled.div`
  .contact-icon {
    border-radius: 10%;
    height: 32px;
  }

  .contact-icon:hover {
    opacity: 50%;
  }
`;

class Contact extends Component {
  state = {
    contactDetails: [
      {
        link: "https://www.linkedin.com/in/jeromelieow/",
        src: LinkedIn,
      },
      {
        link: "https://www.facebook.com/romeromerome/",
        src: Facebook,
      },
      {
        link: "https://www.linkedin.com/in/jeromelieow/",
        src: Instagram,
      },
      {
        link: "https://www.linkedin.com/in/jeromelieow/",
        src: Email,
      },
      {
        link: "https://www.linkedin.com/in/jeromelieow/",
        src: Github,
      },
    ],
  };

  render() {
    return (
      <Styles>
        <div
          style={{
            // backgroundColor: "#DDBEA9",
            backgroundColor: "#FDFCFA",
            paddingTop: "25px",
            paddingBottom: "10px",
            paddingLeft: "60px",
            paddingRight: "60px",
          }}
        >
          <div align="center" style={{ postion: "relative" }}>
            <h3>Jerome Lieow</h3>
            <h6>You may connect with me on these platforms</h6>
            <table>
              <tbody>
                <tr>
                  {this.state.contactDetails.map((contactDetail) => {
                    return (
                      <td key={contactDetail.src} align="center">
                        <a href={contactDetail.link}>
                          <img
                            className="contact-icon"
                            src={contactDetail.src}
                            style={{ margin: "10px" }}
                            alt=""
                          />
                        </a>
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ margin: 0, paddingTOp: "20px", fontSize: "12px" }}>
            <b>Built with React, sourcecode available on github.</b>
          </p>
        </div>
      </Styles>
    );
  }
}

export default Contact;
