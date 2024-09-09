import React from "react";
import Clock from "./Clock";
import MyClock from "./MyClock";
import MyStateClock from "./MyStateClock";
import "../App.css";

export default function Tick() {
  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          
          <h1>Hello, I'm Parent </h1>
          {/* <h2>It is {new Date().toLocaleTimeString()}</h2> */}

          <MyClock date={new Date()} />
          <Clock date={new Date()} />
          <MyStateClock />

        </header>
      </div>
    </React.Fragment>
  );
}
// setInterval(Tick, 1000);
