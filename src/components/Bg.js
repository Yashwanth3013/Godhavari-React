import React from "react";
import Blur from "../assets/img/avatars/Blur.png";

function Bg() {
  return (
    <div
      class="bg-image"
      style={{
        backgroundImage: `url(${Blur})`,
        top: "0px",
        left: "0px",
        width: "1560px",
        height: "780px",
      }}
    ></div>
  );
}

export default Bg;
