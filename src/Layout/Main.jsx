import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <div className="relative">
        <div className="bg-primary/20 z-1000">
          <NavBar></NavBar>
        </div>
        <div className="absolute left-0 w-full -z-10 ">
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Main;
