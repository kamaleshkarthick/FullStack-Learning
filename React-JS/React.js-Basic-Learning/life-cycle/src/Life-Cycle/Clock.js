import React from "react";

export default function Clock(props) {
    return (
        <React.Fragment>
            <h2>Function Component</h2>
            <h4> Now Time is {props.date.toLocaleTimeString()}</h4>
        </React.Fragment>
    );
}