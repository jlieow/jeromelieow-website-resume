import React, { Component } from "react";

class Education extends Component {
  state = {
    education: [
      {
        school: "The University of Manchester",
        qualification: "MEng, Electrical and Electronics Engineering",
        startYear: "2013",
        endYear: "2016",
        description:
          "Manchester pushed my boundaries further and taught me the love of learning. Stepping out of my comfort zone, I pursued new skills outside of my cirriculum such as learning Spanish to snowboarding. Manchester expanded my comfort zone and my worldview. ",
      },
      {
        school: "Singapore Polytechnic",
        qualification: "Diploma in Aerospace Electronics",
        startYear: "2009",
        endYear: "2012",
        description:
          "It was here when I first picked up programming, and competed both at the school and national level in the sport of dragonboat.\n\nThe programme allowed me to push myself and I have learnt grit, discipline and leadership in the three years I was here.",
      },
    ],
  };

  render() {
    return (
      <div>
        <div style={{ textAlign: "center", padding: "10px" }}>
          <h3>Education</h3>
        </div>
        {this.state.education.map((ed) => {
          return (
            <div key={ed.school} style={{ textAlign: "left" }}>
              <h4>
                <span
                  style={{
                    borderBottom: "2px solid black",
                  }}
                >
                  {ed.school}
                </span>
              </h4>

              <h6>{ed.qualification}</h6>
              <p>
                {ed.startYear} - {ed.endYear}
              </p>
              <p style={{ whiteSpace: "pre-wrap" }}>{ed.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Education;
