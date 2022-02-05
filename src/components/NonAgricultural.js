import React from 'react';
import back from "../assets/img/avatars/Group 417.png";
import hello from "../assets/img/avatars/Hello.png";
import bbmp from "../assets/img/avatars/bbmp.png";
import swathu from "../assets/img/avatars/swathu.png";
import upor from "../assets/img/avatars/upor.png";
import aasthi from "../assets/img/avatars/aasthi.png";
import bda from "../assets/img/avatars/bda.png";
import others from "../assets/img/avatars/others.png";


const NonAgricultural = () => {
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
                  className="ml-3 font-weight-bold"
                  style={{ color: "#222222", fontSize: "14px" }}
                >
                  <p>Awesome, So Do you know where was it registered?</p>
                </div>
                <div>
                  <p
                    className="font-weight-bold ml-3"
                    style={{ fontSize: "25px" }}
                  >
                  Select the Jurisdiction to continue
                  </p>
                </div>
                <div>
                  <p
                    className="ml-3 font-weight-bold"
                    style={{ color: "#707070", fontSize: "14px" }}
                  >
                  Select one to Continue
                  </p>
                </div>
              </div>
            </div>
            </div>
        <div class='d-flex flex-row'>
            
            <div className="">
            <img
            style={{
              top: "223px",
              left: "40px",
              width: "165px",
              height: "160px",
            }}
            src={bbmp}
          />
          </div>
            <div className="col-m-2"></div>
            <img
            style={{
              top: "223px",
              left: "40px",
              width: "165px",
              height: "160px",
            }}
            src={swathu}
          />
        
        
            <div className="col-m-2"></div>
            <img
            style={{
              top: "223px",
              left: "40px",
              width: "165px",
              height: "160px",
            }}
            src={upor}
          />
          <div className="col-m-2"></div>
            <img
            style={{
              top: "223px",
              left: "40px",
              width: "165px",
              height: "160px",
            }}
            src={aasthi}
          />
          <div className="col-m-2"></div>
            <img
            style={{
              top: "223px",
              left: "40px",
              width: "165px",
              height: "160px",
            }}
            src={bda}
          />
          <div className="col-m-2"></div>
            <img
            style={{
              top: "223px",
              left: "40px",
              width: "165px",
              height: "160px",
            }}
            src={others}
          />
          </div>
        </div>
        </div>
     
  );
};

export default NonAgricultural;
