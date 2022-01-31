import React from "react";

const FooterLogin = () => {
  return (
    <div>
      <footer
        style={{ backgroundColor: "#34373d", height: "40px", color: "white" }}
      >
        <div class="d-flex" style={{ marginLeft: "10px", paddingTop: "8px" }}>
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
  );
};

export default FooterLogin;
