import React from "react";
import back from "../assets/img/avatars/Group 417.png";
import hello from "../assets/img/avatars/Hello.png";
import land1 from "../assets/img/avatars/land-1.png";
import land2 from "../assets/img/avatars/land-2.png";
import land3 from "../assets/img/avatars/land-3.png";
import land4 from "../assets/img/avatars/land-4.png";
import land5 from "../assets/img/avatars/land-5.png";
import land6 from "../assets/img/avatars/land-6.png";
import land7 from "../assets/img/avatars/land-7.png";
import land8 from "../assets/img/avatars/doc-4.png";

const Types = () => {
  return (
    <div>
      <div class="card shadow-lg bg-white rounded m-5 ">
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
          <div className="d-flex align-items-center ml-5">
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
                  fontSize: "28px",
                  top: "388px",
                  left: "298px",
                  width: "1100px",
                  height: "48px",
                }}
                className="font-weight-bold ml-5"
              >
                <p>What are you applying for?</p>
              </div>
              <div>
                <p
                  className="ml-5 font-weight-bold"
                  style={{ color: "#707070", fontSize: "18px" }}
                >
                  Select one of the services to continue
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 mt-5 d-flex flex-column gap-5">
          <div className="d-flex  justify-content-around ">
            <div>
              <img
                style={{
                  top: "537px",
                  left: "660px",
                  width: "160px",
                  height: "200px",
                  cursor: "pointer",
                }}
                src={land1}
              />
            </div>
            <div>
              <img
                style={{
                  top: "537px",
                  left: "660px",
                  width: "160px",
                  height: "200px",
                  cursor: "pointer",
                }}
                src={land2}
              />
            </div>
            <div>
              <img
                style={{
                  top: "537px",
                  left: "660px",
                  width: "160px",
                  height: "200px",
                  cursor: "pointer",
                }}
                src={land4}
              />
            </div>
            <div>
              <img
                style={{
                  top: "537px",
                  left: "660px",
                  width: "160px",
                  height: "200px",
                  cursor: "pointer",
                }}
                src={land5}
              />
            </div>
          </div>
          <div className="d-flex  justify-content-around">
            <div>
              <img
                style={{
                  top: "537px",
                  left: "660px",
                  width: "160px",
                  height: "200px",
                  cursor: "pointer",
                }}
                src={land6}
              />
            </div>
            <div>
              <img
                style={{
                  top: "537px",
                  left: "660px",
                  width: "160px",
                  height: "200px",
                  cursor: "pointer",
                }}
                src={land7}
              />
            </div>
            <div>
              <img
                style={{
                  top: "537px",
                  left: "660px",
                  width: "160px",
                  height: "200px",
                  cursor: "pointer",
                }}
                src={land3}
              />
            </div>
            <div>
              <img
                style={{
                  top: "537px",
                  left: "660px",
                  width: "160px",
                  height: "200px",
                  cursor: "pointer",
                }}
                src={land8}
              />
            </div>
          </div>
        </div>
        </div>
      </div>
  )
};

export default Types;
