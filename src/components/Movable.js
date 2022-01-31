import React from "react";
import back from "../assets/img/avatars/Group 417.png";
import hello from "../assets/img/avatars/Hello.png";
import immovable from "../assets/img/avatars/immovable.png";
import movable from "../assets/img/avatars/movable.png";

const Movable = () => {
  return (
    <div>
      <div class="card shadow-lg  bg-white rounded m-5">
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
                <p>Is the property Movable or Immovable?</p>
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
              src={immovable}
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
              src={movable}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movable;
