import React from "react";

function Patient() {
  return (
    <div>
      <section className="patient patient_doctor_bg" id="patient">
        <div className="container">
          <div className="row min-vh-100 align-items-center text-center text-md-left">
            <div className="col-md-6 pr-md-5 " data-aos="zoom-in">
              <img src={"/images/patient1.jpg"} width="100%" alt="patient" />
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
                    <a href="registration_patient.html">Register</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Patient;
