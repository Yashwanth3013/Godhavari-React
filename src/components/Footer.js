import React from "react";

const Footer = () => {
  return(
  <div>
    <footer
      className="card shadow-lg"
      style={{
        backgroundColor: "#05265b",
        color: "white",
        height: "200px",
      }}
    >
      <div class="d-flex justify-content-around ">
        <div className="mt-5">
          <img
            src="assets/img/avatars/footer.png"
            style={{ width: "480px", height: "80px" }}
          />
        </div>

        <div class="d-flex flex-column justify-content-center align-items-center gap-3 mt-5">
          <div>
            <h3 style={{ fontWeight: "500" }}>Follow Us</h3>
          </div>
          <div className="d-flex gap-3">
            <img
              src="assets/img/avatars/Group 153.png"
              style={{ cursor: "pointer" }}
            />
            <img
              src="assets/img/avatars/Group 154.png"
              style={{ cursor: "pointer" }}
            />
            <img
              src="assets/img/avatars/Group 155.png"
              style={{ cursor: "pointer" }}
            />
            <img
              src="assets/img/avatars/Group 156.png"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div class="d-flex  flex-column justify-content-center align-items-center mt-5  ">
          <div>
            <h3 style={{ fontWeight: "500" }}>Contact Us</h3>
          </div>
          <div className="d-flex flex-column  justify-content-center align-items-center gap-5">
            <div>
              <span>
                8th floor, Kandaya Bhavan,<br></br>
                K.G. Road, Bengaluru-560009
              </span>
            </div>
            <div>
              <span>Ph. No. 080-22220979</span>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-end">
          <span>sd1.igro@karnataka.gov.in</span>
          <span>sd2.igro@karnataka.gov.in</span>
          <span>sd3.igro@karnataka.gov.in</span>
          <span>sd4.igro@karnataka.gov.in</span>
        </div>
      </div>
    </footer>
    <footer
      style={{
        backgroundColor: "#34373d",
        Zindex: "1020",
        height: "40px",
        color: "white",
      }}
    >
      <div class="d-flex" style={{ marginLeft: "20px", paddingTop: "8px" }}>
        <div class="" style={{ color: "white" }}>
          <span class="ftrs">Accessibility Statement&emsp;|</span>
        </div>
        <div class="">
          <span class="ftrs">&emsp;Terms & Conditions&emsp;|</span>
        </div>
        <div class="">
          <span class="ftrs">&emsp;Website Policies&emsp;|</span>
        </div>
        <div class="">
          <span class="ftrs">&emsp;Help&emsp;|</span>
        </div>
        <div class="">
          <span class="ftrs">&emsp;Feedback&emsp;|</span>
        </div>
        <div class="">
          <span class="ftrs">&emsp;Contact Us&emsp;|</span>
        </div>
        <div class="">
          <span class="ftrs">&emsp;Web Information Manager&emsp;|</span>
        </div>
        <div class="">
          <span class="ftrs">&emsp;FAQ&emsp;|</span>
        </div>
        <div class="">
          <span class="ftrs">&emsp;Sitemap&emsp;|</span>
        </div>
        <div class="">
          <span class="ftrs">&emsp;Visitors Analytics</span>
        </div>
      </div>
    </footer>
    <footer style={{ height: "30px", backgroundColor: "#fbfbfb" }}>
      <div class="row">
        <span className="mt-3 ml-5" style={{ color: "black" }}>
          ©2021, Department of Stamps and Registration, Karnataka
        </span>
      </div>
    </footer>
    </div>
  )
};

export default Footer;
