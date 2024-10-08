import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Products">Product</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/admin/dashboard">Admin</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default NavBar;
