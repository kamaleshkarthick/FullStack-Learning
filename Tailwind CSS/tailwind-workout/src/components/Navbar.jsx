// eslint-disable-next-line no-unused-vars
import React from "react";

const Navbar = () => {
    return (
        <>
            <nav className=" mt-[10px] font-body">
                <div className="flex justify-between items-center max-w-7xl h-[3.2rem] mx-auto">
                    <div className="  ">
                        <h1 className="  text-4xl text-gray-800 font-light">
                            <span className=" text-5xl text-[#50d71e] font-semibold mr-3">
                                Fruit
                            </span>
                            Shop
                        </h1>
                    </div>

                    <div className="">
                         <ul className=" flex space-x-6 items-center text-xl text-[#505050] ">
                        <li className=" navitem"><a href="#">Fruits</a></li>
                        <li className="navitem "><a href="">Vegetable</a> </li>
                        <li className=" navitem"><a href="#">More</a></li>
                        <li className=" "><svg
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
