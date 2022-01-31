import React from "react";

const Slider = () => {
  return (
    <div className="card shadow-lg  m-5 bg-white">
      <div className="d-flex align-items-center">
        <img
          src="assets/img/avatars/Rectangle673.png"
          style={{
            top: "250px",
            left: "75px",
            width: "272px",
            height: "215px",
          }}
        ></img>
        <div className="d-flex  flex-column">
          <div>
            <p
              style={{
                color: "black",
                fontSize: "38px",
                top: "283px",
                left: "381px",
                width: "940px",
                height: "60px",
              }}
              className="font-weight-bold"
            >
              Welcome to Godhavari Online Services
            </p>
          </div>
          <div>
            <p
              style={{
                color: "GrayText",
                fontSize: "18px",
                top: "379px",
                left: "381px",
                width: "880px",
                height: "57px",
              }}
            >
              {" "}
              Godhavari Online Service offers a wide variety of services,
              including Property, Marriage and frim Registration Power of
              Attorney, Enumbrance Certificate, Certified copy and lot more
            </p>
          </div>
        </div>
        <button
          type="submit"
          class="btn btn-light rounded"
          style={{
            width: "220px",
            height: "58px",
            backgroundColor: "#0A429B",
            color: "#FFFFFF",
          }}
        >
          <p className="font-weight-bold" style={{ fontSize: "14px" }}>
            Log in to know more
          </p>
        </button>
      </div>
    </div>
  );
};

export default Slider;
