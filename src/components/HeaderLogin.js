import React from "react";

import { Link } from "react-router-dom";

const HeaderLogin = () => {
  return (
    <div
      className="card shadow-lg bg-white"
      style={{
        height: "100px",
      }}
    >
      <div className="d-flex justify-content-between align-items-center ">
        <div className="d-flex align-items-center m-3 ">
          <img
            className="ml-3"
            src="assets/img/avatars/gkl.png"
            style={{ top: "20px", left: "80px", width: "80px", height: "80px" }}
          />

          <div className="d-flex flex-column  ">
            <p
              className="font-weight-bold ml-3"
              style={{
                color: "#2A2A2A",
                fontSize: "20px",
                fontFamily: "Segoe UI",
                fontStyle: "italic",
              }}
            >
              Godhavari Online Service
            </p>
            <p
              className="ml-3"
              style={{
                color: "#2A2A2A",
                fontSize: "18px",
                fontFamily: "Segoe UI",
                fontStyle: "italic",
              }}
            >
              Department of Stamp and Registration Government of Andhra Pradesh
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-5 m-5 ">
          <p className="mt-3" style={{ fontSize: "16px" }}>
            hello,user
          </p>
          <img
            src="assets\img\avatars\hello.png"
            style={{
              width: "45px",
              borderRadius: "4px",
            }}
          />
          <i
            class="fa fa-bell"
            style={{
              fontSize: "28px",
              color: "gray",
            }}
          ></i>
          <button
            type="submit"
            class="btn btn-primary"
            style={{
              width: "103px",
              height: "36px",
              backgroundColor: "#0A429B",
            }}
          >
            <p style={{ fontSize: "16px" }}>Logout</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderLogin;
