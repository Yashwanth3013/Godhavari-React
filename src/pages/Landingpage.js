import React from "react";
import DashServices from "../components/DashServices";
import Footer from "../components/Footer";
import Tabledashboard from "../components/Tabledashboard";
import Tabmenu from "../components/Tabmenu";
import Header from "../components/Header";
import Slider from "../components/Slider";

const landingpage = () => {
  return (
    <div>
      <Header></Header>
      <Tabmenu></Tabmenu>
      <Slider></Slider>
      <Tabledashboard></Tabledashboard>
      <DashServices></DashServices>
      <Footer></Footer>
    </div>
  );
};

export default landingpage;
