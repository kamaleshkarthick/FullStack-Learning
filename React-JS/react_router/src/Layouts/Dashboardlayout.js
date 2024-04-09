import React from 'react'
import { Outlet } from 'react-router-dom';

const Dashboardlayout = () => {
  return (
    <>
         <h1>Product Dashboard</h1>
          <Outlet/>
      </>
  )
}

export default Dashboardlayout;