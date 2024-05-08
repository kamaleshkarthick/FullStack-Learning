// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

    const menuclicked = () => {
        setOpen(!open);
  };
  return (
    <>
      <nav className=" mt-[10px] font-body">
              <div className=" w-[80dvw] md:flex md:justify-between md:items-center md:max-w-7xl  mx-auto"> 
                  <div className="flex justify-between items-center">
          <div className="  ">
            <h1 className="  text-4xl text-gray-800 font-light">
              <span className=" text-5xl text-[#50d71e] font-semibold mr-3">
                Fruit
              </span>
              Shop
            </h1>
          </div>

          <div className=" md:hidden  mt-1">
            <button onClick={menuclicked} className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          </div>
          <div className={` flex  justify-end ${open? "block": "hidden"} md:block`}>
            <ul className=" space-y-4 md:space-y-0 md:flex md:space-x-6 items-center text-xl text-[#505050]  ">
              <li className=" navitem">
                <a href="#">Fruits</a>
              </li>
              <li className="navitem ">
                <a href="">Vegetable</a>
              </li>
              <li className=" navitem">
                <a href="#">More</a>
              </li>
              <li className=" px-4 py-2 md:px-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
