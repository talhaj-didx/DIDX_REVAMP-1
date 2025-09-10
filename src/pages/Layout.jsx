import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "../components/navigation";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      {/* <Navigation /> */}
      <Navbar/>
      <Outlet />
    </>
  );
};

export default Layout;
