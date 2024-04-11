import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import BreadCrumbs from "../Components/BreadCrumbs";

const Rootlayouts = () => {
  console.log(Outlet);
  return (
    <>
      <Navbar />
      <BreadCrumbs />
      <h5>Rootlayout of Home</h5>
      <Outlet />
    </>
  );
};

export default Rootlayouts;
