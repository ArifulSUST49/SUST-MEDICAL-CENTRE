import React from "react";

function Footer() {
  return (
    <div>
      <section class="footer">
        <div class="container">
          <div class="row">
            <div className="col-md-4" data-aos="fade-right">
              <a href="#" class="logo">
                <span>S</span>UST<span>M</span>EDICAL
              </a>
              <p>
                The Health Service Centre, SUST located near the central
                auditorium just opposite to the basket ball ground , offers free
                experienced general practitioner and emergency medical care
                services to all members of the University community: students
                (undergraduate and post graduate), teachers ,staffs and their
                families in a user-friendly efficient environment.
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
  );
}

export default Footer;
