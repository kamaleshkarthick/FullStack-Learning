import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
// import Check from "../Check"


const Rootlayout = () => {
  return (
      <>
          <Navbar />
          <Outlet/>
          {/* <Check/> */}
      </>
  )
}

export default Rootlayout