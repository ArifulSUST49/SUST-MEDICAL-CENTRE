import React from "react";

function Appointment() {
  return (
    <div>
      <section class="contact" id="contact">
        <div class="container min-vh-100">
          <div class="row justify-content-center">
            <h1 class="heading">
              <span>'</span> make an appointment <span>'</span>
            </h1>

            <div class="col-md-10" data-aos="flip-down">
              <form action="">
                <div class="inputBox">
                  <input type="text" placeholder="full name"></input>
                  <input type="number" placeholder="phone"></input>
                </div>

                <div class="inputBox">
                  <input type="text" placeholder="Registration Number"></input>
                  <select name="" id="">
                    <option value="" disabled selected>
                      make an appointment
                    </option>
                    <option value="09-11 am">09-11 am</option>
                    <option value="11-03 pm">11-03 pm</option>
                    <option value="03-06 pm">03-06 pm</option>
                    <option value="06-09 pm">06-09 pm</option>
                  </select>
                </div>

                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="message ( optional )"
                ></textarea>

                <input
                  type="submit"
                  name=""
                  id=""
                  value="make appointment"
                  class="button"
                ></input>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Appointment;
