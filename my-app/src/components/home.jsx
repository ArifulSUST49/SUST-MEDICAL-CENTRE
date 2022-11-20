import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  link,
  Link,
} from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="App">
        <header class="bg-secondary">
          <div class="container">
            <a href="#" class="logo">
              <span>S</span>UST<span>M</span>EDICAL
            </a>

            <nav class="nav justify-content-centre py-1">
              <ul class="nav">
                <li class="nav-item">
                  <a href="#home">Home</a>
                </li>
                <li class="nav-item">
                  <Link to={`about`}>Services</Link>
                </li>
                <li class="nav-item">
                  <Link to={`doctor`}>Doctor</Link>
                </li>
                <li class="nav-item">
                  <Link to={`patient`}>patient</Link>
                </li>
                <li class="nav-item">
                  <Link to={`admin`}>Admin</Link>
                </li>
                <li class="nav-item">
                  <Link to={`appointment`}>Appointment</Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="Patient_Appointment.html">
                    Prescription
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="Patient_Appointment.html">
                    Prescription
                  </a>
                </li>
              </ul>
            </nav>

            <div class="fas fa-bars"></div>
          </div>
        </header>

        <section className="home" id="home">
          <div className="container">
            <div className="row min-vh-100 align-items-center text-center text-md-left">
              <div className="col-md-6 pr-md-5 " data-aos="zoom-in">
                <img src={"/images/home-img.svg"} width="100%" alt="home" />
              </div>

              <div className="col-md-6 pl-md-5 content" data-aos="fade-left">
                <h1>
                  <span>stay</span> safe, <span>stay</span> healthy.
                </h1>
                <h3>caring for you.</h3>
                <a href="#">
                  <button class="button">learn more</button>
                </a>
              </div>
            </div>
          </div>
        </section>

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

        <section className="Doctor patient_doctor_bg" id="Doctor">
          <div className="container">
            <div className="row min-vh-100 align-items-center text-center text-md-left">
              <div className="col-md-6 pr-md-5 " data-aos="zoom-in">
                <img src={"images/doctor.svg"} width="100%" alt="doctor" />
              </div>

              <div className="col-md-6 pl-md-5 content" data-aos="fade-left">
                <div className="center">
                  <h1>Doctor Login</h1>
                  <form method="post">
                    <div className="txt_field">
                      <input type="text" required></input>
                      <span></span>
                      <label>Username</label>
                    </div>
                    <div className="txt_field">
                      <input type="password" required></input>
                      <span></span>
                      <label>Password</label>
                    </div>

                    <input type="submit" value="Login"></input>
                    <div className="signup_link">
                      Forgot Password?
                      <a href="#">Recover Password</a>
                      <br></br>
                      Not a member?{" "}
                      <a href="registration_doctor.html">Register</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="patient patient_doctor_bg" id="patient">
          <div className="container">
            <div className="row min-vh-100 align-items-center text-center text-md-left">
              <div className="col-md-6 pr-md-5 " data-aos="zoom-in">
                <img src={"images/patient1.png"} width="100%" alt="patient" />
              </div>

              <div className="col-md-6 pl-md-5 content" data-aos="fade-left">
                <div className="center">
                  <h1>Patient Login</h1>
                  <form method="post">
                    <div className="txt_field">
                      <input type="text" required></input>
                      <span></span>
                      <label>Username</label>
                    </div>
                    <div className="txt_field">
                      <input type="password" required></input>
                      <span></span>
                      <label>Password</label>
                    </div>

                    <input type="submit" value="Login"></input>
                    <div className="signup_link">
                      Forgot Password?
                      <a href="#">Recover Password</a>
                      <br></br>
                      Not a member?{" "}
                      <Link to={`registrationpatient`}>Register</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="Doctor patient_doctor_bg" id="Admin">
          <div className="container">
            <div className="row min-vh-100 align-items-center text-center text-md-left">
              <div className="col-md-6 pr-md-5 " data-aos="zoom-in">
                <img src={"images/doctor.svg"} width="100%" alt="doctor" />
              </div>

              <div className="col-md-6 pl-md-5 content" data-aos="fade-left">
                <div class="center">
                  <h1>Admin Login</h1>
                  <form method="post">
                    <div className="txt_field">
                      <input type="text" required></input>
                      <span></span>
                      <label>Username</label>
                    </div>
                    <div className="txt_field">
                      <input type="password" required></input>
                      <span></span>
                      <label>Password</label>
                    </div>

                    <input type="submit" value="Login"></input>
                    <div className="signup_link">
                      Forgot Password?
                      <a href="#">Recover Password</a>
                      <br></br>
                      Not a member?{" "}
                      <a href="admin_registration.html">Register</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="footer">
          <div class="container">
            <div class="row">
              <div className="col-md-4" data-aos="fade-right">
                <a href="#" class="logo">
                  <span>S</span>UST<span>M</span>EDICAL
                </a>
                <p>
                  The Health Service Centre, SUST located near the central
                  auditorium just opposite to the basket ball ground , offers
                  free experienced general practitioner and emergency medical
                  care services to all members of the University community:
                  students (undergraduate and post graduate), teachers ,staffs
                  and their families in a user-friendly efficient environment.
                </p>
              </div>

              <div className="col-md-4 text-center" data-aos="fade-up">
                <h3>links</h3>
                <a href="#">home</a>
                <a href="#">services</a>
                <a href="#">Doctor</a>
                <a href="#">Patient</a>
                <a href="contact.html">contact</a>
              </div>

              <div class="col-md-4 text-center" data-aos="fade-left">
                <h3>share</h3>
                <a href="https://www.sust.edu/offices/other-offices/14">
                  facebook
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
