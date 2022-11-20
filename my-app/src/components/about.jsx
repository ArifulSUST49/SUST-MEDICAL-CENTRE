import React from "react";

function About() {
  return (
    <div>
      <section className="about" id="about">
        <div className="container">
          <div className="row min-vh-100 align-items-center">
            <div className="col-md-5 content" data-aos="fade-right">
              <div className="box">
                <h3>
                  {" "}
                  <i className="fas fa-ambulance"></i> Check-Up{" "}
                </h3>
                <p>
                  Routine medical examinations & health checkups (blood
                  pressure, RBS by glucometer etc.
                </p>
              </div>

              <div className="box">
                <h3>
                  {" "}
                  <i className="fas fa-procedures"></i> Treatment
                </h3>
                <p>Treatment of illness, injury, & other physical problems</p>
              </div>

              <div className="box">
                <h3>
                  {" "}
                  <i className="fas fa-stethoscope"></i>Vaccination
                </h3>
                <p>Vaccination :Hepatitis B and Ca cervix</p>
              </div>

              <div className="box">
                <h3>
                  {" "}
                  <i className="fas fa-stethoscope"></i>Service
                </h3>
                <p>
                  Travel Medicine and Advice,Sports Injury Management,Minor
                  Wound Management
                </p>
              </div>
            </div>

            <div className="col-md-7 d-none d-md-block" data-aos="fade-left">
              <img src={"images/about.png"} width="100%" alt="doctor" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
