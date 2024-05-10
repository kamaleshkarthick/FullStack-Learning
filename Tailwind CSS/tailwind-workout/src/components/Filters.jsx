// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Filters = () => {
  
  const [select, setSelect] = useState(1);
  return (
    <>
      <section className=" w-3/5 mx-auto my-10 py-3 flex  flex-col md:flex-row justify-between ">
        
              {["Latest", "Best Seller", "Special"].map((item, i) => (
                  <button className={`font-body border border-slate-300 px-10 py-3 rounded-full transform hover:scale-110 duration-300 ${select===i+1 ? "bg-[#4baf4b] text-white":" text-slate-500"} my-3 md:my-0`} key={i } onClick={()=> setSelect(i+1) }>{ item}</button>
              ))
              }
      </section>
    </>
  );
};

export default Filters;
