import React from 'react'
import { Link, Outlet } from "react-router-dom";


const Contactlayout = () => {
  return (
      <>
          <h2> Contact Detail</h2>
          <Link to="mail">Mail</Link><br/>
          <Link to="Phone">Phone No</Link>
          {/* Render the child route using outlet */}
          <Outlet/>
      </>
  )
}

export default Contactlayout