import React, { useState } from "react";

export default function HooksTimer() {
  let [Time, setTime] = useState(nowtime());

  function nowtime() {
    return new Date().toLocaleTimeString();
  }

  function updateTime() {
    setTime(nowtime());
  }

  setInterval(updateTime, 2000);

  return (
    <React.Fragment>
      <h1>HooksTimer</h1>
      <h2>Now Time is {Time}.</h2>
      <button onClick={updateTime}>Update Time</button>
    </React.Fragment>
  );
}
