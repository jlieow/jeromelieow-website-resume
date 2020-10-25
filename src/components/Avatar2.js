import React, { Component } from "react";
import { Link } from "react-scroll";
import Puffin from "../assets/images/slider_puffin_before_mobile.png";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

const Styles = styled.div`
  .row {
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap-reverse; /* IE10 */
    flex-wrap: wrap-reverse;
    max-width: 900px;
    height: 100%;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .column {
    // border: 1px solid white;
    -ms-flex: 50%; /* IE10 */
    flex: 50%;
    max-width: 50%;
    text-align: left;
  }

  .column-div {
    margin-left: 25px;
    margin-right: 25px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .column img {
    vertical-align: middle;
    max-width: 400px;
    width: 100%;
    height: auto;
    border-radius: 0 80px 0 80px;
    padding: 5px;
    border: 5px solid white;
  }

  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 875px) {
    .row {
      display: -ms-flexbox; /* IE10 */
      display: flex;
      -ms-flex-wrap: wrap-reverse; /* IE10 */
      flex-wrap: wrap-reverse;
      max-width: 900px;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }

    .column {
      -ms-flex: 100%;
      flex: 100%;
      max-width: 100%;
      height: 100%;
      text-align: center;
      padding-bottom: 20px;
    }

    .column div {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  [data-aos="animateFadeInUp"] {
    transform: translateY(-30%);
    opacity: 0;
    transition-property: transform, opacity;
    &.aos-animate {
      transform: translateY(-50%);
      opacity: 1;
    }
  }
`;

class Avatar extends Component {
  componentDidMount() {
    Aos.init({ duration: 2000 });
  }

  componentDidUpdate() {
    Aos.refresh();
  }

  render() {
    const contentAboutMe =
      "An Avionics Engineer with a love for developing useful software.\n\nCurrently with the Republic of Singapore Air Force";

    return (
      <Styles>
        {/* <div
          style={{ height: "calc(100vh - 130px)", border: "1px solid white" }}
        > */}
        <div
          style={{
            height: "calc(100vh - 240px)",
            border: "1px solid black",
            margin: "50px",
          }}
        >
          <div className="row" data-aos="animateFadeInUp">
            <div className="column" style={{ border: "1px solid black" }}>
              <div className="column-div">
                <img
                  className="img2"
                  src={Puffin}
                  alt=""
                  style={{ border: "1px solid black" }}
                />
              </div>
            </div>
            <div className="column" style={{ border: "1px solid black" }}>
              <div className="column-div">
                <h6 style={{ border: "1px solid black" }}>Name:</h6>
                <p>Jerome Lieow</p>
                <h6>Location:</h6>
                <p>Singapore</p>
                <p style={{ whiteSpace: "pre-wrap" }}>{contentAboutMe}</p>
                <div
                  style={{
                    display: "inline-flex",
                    // border: "1px solid black",
                    width: "100%",
                    textAlign: "center",
                    position: "inherit",
                  }}
                >
                  <div style={{ width: "50%" }}>
                    <Link to="bottom" spy={true} smooth={true} duration={300}>
                      <button>Contact Me</button>
                    </Link>
                  </div>
                  <div style={{ width: "50%" }}>
                    <Link to="bottom" spy={true} smooth={true} duration={300}>
                      <button>Contact Me</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </Styles>
      // <div style={{ height: "calc(100vh - 130px)", border: "1px solid white"}}>
      //   <div style={{ height: "calc(100vh - 260px)", border: "1px solid white"}}>
      //         <table  className="cover-body" style={{verticalAlign: "middle", height: "100%", width: "100%"}}>
      //           <tr>
      //               <td align="center">
      //                 <table className="avatar-table">
      //                   <tr>
      //                     <td align="right">
      //                       <div>
      //                         <p style={{whiteSpace: "pre-wrap"}}>{contentAboutMe}
      //                         </p>
      //                       </div>
      //                     </td>
      //                     <td align="center" style={{ verticalAlign: "middle" }}>
      //                         <img className="avatar-img" src={Puffin} />
      //                     </td>
      //                     <td align="left">
      //                       <div>
      //                         <h6>Name:</h6>
      //                         <p>Jerome Lieow</p>
      //                         <h6>Location:</h6>
      //                         <p>Singapore</p>
      //                       </div>
      //                     </td>
      //                   </tr>
      //                   <tr align="center">
      //                     <th colSpan="3">
      //                       <p>
      //                         Java | Javascript | C | Python | PHP | SQL
      //                       </p>
      //                     </th>
      //                   </tr>
      //                 </table>

      //               </td>
      //           </tr>
      //         </table>
      //   </div>
      // </div>
    );
  }
}

export default Avatar;
