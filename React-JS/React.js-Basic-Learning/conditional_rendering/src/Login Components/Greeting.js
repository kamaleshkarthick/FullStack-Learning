import React from "react";
import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";

export default function Greeting(props) {
  const islog_in = props.isloggedin;

  return (
    <React.Fragment>
      {islog_in ? <UserGreeting /> : <GuestGreeting />}
    </React.Fragment>
  );
}
