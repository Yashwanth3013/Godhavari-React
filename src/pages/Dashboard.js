import React from "react";
import ApplicantDashboard from "../components/ApplicantDashboard";
import Footer from "../components/Footer";
import HeaderLogin from "../components/HeaderLogin";
import Tabmenu from "../components/Tabmenu";

const Dashboard = () => {
  return (
    <div>
      <HeaderLogin />
      <Tabmenu />
      <ApplicantDashboard />
      <Footer />
    </div>
  );
};

export default Dashboard;
