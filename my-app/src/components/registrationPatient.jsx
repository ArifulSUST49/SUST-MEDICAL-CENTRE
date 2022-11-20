import React from "react";

function RegistrationPatient() {
  return (
    <div>
      <div class="container">
        <div class="title">Registration</div>
        <div class="content">
          <form action="#">
            <div class="user-details">
              <div class="input-box">
                <span class="details">Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                ></input>
              </div>
              <div class="input-box">
                <span class="details">Userame</span>
                <input
                  type="text"
                  placeholder="Enter your Username"
                  required
                ></input>
              </div>
              <div class="input-box">
                <span class="details">Department</span>
                <input
                  type="text"
                  placeholder="Enter your Department"
                  required
                ></input>
              </div>
              <div class="input-box">
                <span class="details">Registration Number</span>
                <input
                  type="text"
                  placeholder="Enter your Registration Number"
                  required
                ></input>
              </div>
              <div class="input-box">
                <span class="details">Phone Number</span>
                <input
                  type="text"
                  placeholder="Enter your number"
                  required
                ></input>
              </div>
              <div class="input-box">
                <span class="details">Session</span>
                <input
                  type="text"
                  placeholder="Enter Your Session"
                  required
                ></input>
              </div>
              <div class="input-box">
                <span class="details">Password</span>
                <input
                  type="text"
                  placeholder="Enter your password"
                  required
                ></input>
              </div>
              <div class="input-box">
                <span class="details">Confirm Password</span>
                <input
                  type="text"
                  placeholder="Confirm your password"
                  required
                ></input>
              </div>
            </div>
            <div class="gender-details">
              <input type="radio" name="gender" id="dot-1"></input>
              <input type="radio" name="gender" id="dot-2"></input>
              <span class="gender-title">Gender</span>
              <div class="category">
                <label for="dot-1">
                  <span class="dot one"></span>
                  <span class="gender">Male</span>
                </label>
                <label for="dot-2">
                  <span class="dot two"></span>
                  <span class="gender">Female</span>
                </label>
              </div>
            </div>
            <div class="button">
              <input type="submit" value="Register"></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPatient;
