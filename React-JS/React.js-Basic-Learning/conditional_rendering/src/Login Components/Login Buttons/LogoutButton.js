import React from "react";

export default function LogoutButtton(props){
    return (
        <>
            <button onClick={props.onClick}>Logout</button>
        </>
    );
}