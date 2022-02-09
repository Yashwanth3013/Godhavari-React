import React from 'react';
import FooterLogin from '../components/FooterLogin';
import HeaderLogin from "../components/HeaderLogin";
import NonAgricultural from '../components/NonAgricultural';
import Tabmenu from "../components/Tabmenu";
const NonAgriculturalSearch = () => {
  return (
    <div>
     
    <HeaderLogin />
    <Tabmenu /> 
    <NonAgricultural />
    <FooterLogin />
    </div>
  );
};

export default NonAgriculturalSearch;
