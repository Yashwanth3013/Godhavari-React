import React from "react";
import Agricultural from "../components/Agricultural";
import FooterLogin from "../components/FooterLogin";
import HeaderLogin from "../components/HeaderLogin";
import Tabmenu from "../components/Tabmenu";

function AgriculturalNonAgricultural() {
  return (
    <div>
      <HeaderLogin />
      <Tabmenu />
      <Agricultural />
      <FooterLogin />
    </div>
  );
}

export default AgriculturalNonAgricultural;
