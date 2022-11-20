import React from "react";

function Doctor() {
  return (
    <div>
      <section className="Doctor patient_doctor_bg" id="Doctor">
        <div className="container">
          <div className="row min-vh-100 align-items-center text-center text-md-left">
            <div className="col-md-6 pr-md-5 " data-aos="zoom-in">
              <img src={"/images/doctor.svg"} width="100%" alt="doctor" />
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
    </div>
  );
}

export default Doctor;
