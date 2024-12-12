import React from "react";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      {/* <Outlet /> */}
      <section className="h-[12200px]">sdsd</section>
      
    </div>
  );
};

export default MainLayout;
