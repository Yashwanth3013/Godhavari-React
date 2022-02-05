import React from "react";
import FooterLogin from "../components/FooterLogin";
import HeaderLogin from "../components/HeaderLogin";
import Property1of1 from "../components/Property1of1";
import Tabmenu from "../components/Tabmenu";
import ViewPropertyMojiliEsketch from "../components/ViewPropertyMojiliEsketch";


function Mojiniesketch() {
  return (
    <div>
     <HeaderLogin />
     <Tabmenu />
     <ViewPropertyMojiliEsketch /> 
     <Property1of1 />
     <FooterLogin />

    </div>
  );
}

export default Mojiniesketch;
