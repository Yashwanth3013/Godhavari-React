import React from "react";
import FooterLogin from "../components/FooterLogin";
import HeaderLogin from "../components/HeaderLogin";
import Tabmenu from "../components/Tabmenu";
import Types from "../components/Types";

const Apptype = () => {
  return (
    <div>
      <HeaderLogin />
      <Tabmenu />
      <Types />
      <FooterLogin />
    </div>
  );
};

export default Apptype;
