import React from "react";
import back from "../assets/img/avatars/Group 417.png";
import hello from "../assets/img/avatars/Hello.png";
import ag from "../assets/img/avatars/ag.png";
import nag from "../assets/img/avatars/non-ag.png";

function Agricultural() {
  return (
    <div>
      <div class="card shadow-lg bg-white rounded m-5">
        <div className="p-5">
          <img
            style={{
              top: "253px",
              left: "55px",
              width: "56px",
              height: "22px",
            }}
            src={back}
          />
        </div>
        <div>
          <div className="d-flex  align-items-center ml-5 ">
            <img
              style={{
                top: "299px",
                left: "75px",
                width: "200px",
                height: "149px",
              
              }}
              src={hello}
            />
            <div className="d-flex flex-column">
              <div
                style={{
                  fontSize: "18px",
                  top: "305px",
                  left: "298px",
                  width: "596px",
                  height: "27px",
                }}
                className="font-weight-bold ml-5"
              >
                <p>Okay, So Let's start with finding your property</p>
              </div>
              <div
                style={{
                  fontSize: "28px",
                  top: "388px",
                  left: "298px",
                  width: "1100px",
                  height: "48px",
                }}
                className="font-weight-bold ml-5"
              >
                <p>Is it Agricultural or Non-Agricultural?</p>
              </div>
              <div>
                <p
                  className="ml-5 font-weight-bold"
                  style={{ color: "#707070", fontSize: "18px" }}
                >
                  Select one to Continue
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="p-5 mt-5"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <div className="">
            <img
              style={{
                top: "537px",
                left: "660px",
                width: "200px",
                height: "200px",
                cursor: "pointer",
              }}
              src={ag}
            />
          </div>
          <div className="">
            <img
              style={{
                top: "537px",
                left: "1060px",
                width: "200px",
                height: "200px",
                cursor: "pointer",
              }}
              src={nag}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agricultural;
