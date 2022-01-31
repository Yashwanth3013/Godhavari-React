import React from "react";

const Tabmenu = () => {
  return (
    <div className="card shadow-lg bg-white">
      <div class="tab d-flex">
        <button
          class=""
          onclick="openCity(event, 'London')"
          style={{
            borderStyle: "solid",
            borderColor: "#E8E8E8",
            top: "120px",
            left: "0px",
            width: "320px",
            height: "60px",
          }}
        >
          Home
        </button>
        <button
          class=""
          onclick="openCity(event, 'Paris')"
          style={{
            borderStyle: "solid",
            borderColor: "#E8E8E8",
            top: "120px",
            left: "320px",
            width: "320px",
            height: "60px",
          }}
        >
          About Department
        </button>
        <button
          class=""
          onclick="openCity(event, 'Tokyo')"
          style={{
            borderStyle: "solid",
            borderColor: "#E8E8E8",
            top: "120px",
            left: "640px",
            width: "320px",
            height: "60px",
          }}
        >
          Resources
        </button>
        <button
          class=""
          onclick="openCity(event, 'Tokyo')"
          style={{
            borderStyle: "solid",
            borderColor: "#E8E8E8",
            top: "120px",
            left: "960px",
            width: "320px",
            height: "60px",
          }}
        >
          External Links
        </button>
        <button
          class=""
          onclick="openCity(event, 'Tokyo')"
          style={{
            borderStyle: "solid",
            borderColor: "#E8E8E8",
            top: "120px",
            left: "1280px",
            width: "320px",
            height: "60px",
          }}
        >
          Right to Information
        </button>
        <button
          class=""
          onclick="openCity(event, 'Tokyo')"
          style={{
            borderStyle: "solid",
            borderColor: "#E8E8E8",
            top: "120px",
            left: "1600px",
            width: "320px",
            height: "60px",
          }}
        >
          Help
        </button>
      </div>
    </div>
  );
};

export default Tabmenu;
