import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();
  console.log(location);

  let crumbLinK = "";
  const crumbspath = location.pathname
    .split("/")
    .filter((path) => path !== "")
      .map((crumb, i) => {
        console.log("Before :"+crumbLinK)
        console.log("Before - crumb:"+ crumb)
        crumbLinK = `/${crumb}`
        console.log(crumbLinK)
        return <Link to={crumbLinK} key={i}>{crumbLinK}</Link>
      });
  
    // const crumbspaths = location.pathname
    // .split("/")
    // .filter((path) => path !== "")
    //   .map((crumb, i) => {
    //     console.log("Before :"+crumbLinK)
    //     crumbLinK = `/${crumb}`
    //     console.log(crumbLinK)
    //     return <Link to={crumbLinK} key={i}>{crumbLinK}</Link>
    // });
  
  console.log(crumbspath);
  return (
    <>
          <h3>{ crumbspath}</h3>
          {/* <h3><Link to={crumbspaths} >{crumbspaths}</Link></h3> */}
    </>
  );
};

export default BreadCrumbs;
