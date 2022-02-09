import React from "react";
import back from "../assets/img/avatars/Group 417.png";
import hello from "../assets/img/avatars/Hello.png";

const ViewPropertyMojiniEsketch = () => {
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
            <div className="d-flex align-items-center ml-5 mb-5">
              <img
                style={{
                  top: "200px",
                  left: "75px",
                  width: "200px",
                  height: "149px",
                  cursor: "pointer",
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
                  className="font-weight-bold ml-3"
                  style={{ fontSize: "26px" }}
                >
                  <p>According to your Input, this is the property we found in Bhoomi database</p>
                </div>
                <div>
                  <p
                    className="ml-3 font-weight-bold"
                    style={{ color: "#707070", fontSize: "14px" }}
                  >
                  Please check the details, and if correct, select and proceed further. If not, you can go back and search another property
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
        );
      };
      
      export default ViewPropertyMojiniEsketch;
      