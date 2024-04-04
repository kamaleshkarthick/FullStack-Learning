import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const Rootlayouts = () => {
  console.log(Outlet);
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Rootlayouts;
