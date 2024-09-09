import React, { useState } from "react";
export default function HookBs() {
  const [count, setcount] = useState(1);

  //   let kira = { count };

  let incre = () => {
    setcount(count + 1);
  };

  function decre() {
    setcount(count - 1);
    }
    
    // setInterval(incre, 1000)

  return (
    <React.Fragment>
      <h2>Hook, Use State,{count}</h2>

      <button onClick={incre}>Plus</button>
      <button onClick={decre}>minus</button>
    </React.Fragment>
  );
}
