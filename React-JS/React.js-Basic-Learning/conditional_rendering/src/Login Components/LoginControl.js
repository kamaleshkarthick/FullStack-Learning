import React, { Component } from "react";
import Greeting from "./Greeting";
import LogoutButtton from "./Login Buttons/LogoutButton";
import LoginButtton from "./Login Buttons/LoginButton";
import FormPage from '../Form Components/FormPage';

export default class LoginController extends Component {
  constructor() {
    super();
    this.state = {
      isloggedin: true,
      };
      
    }


    handleClick() {
        this.setState({ isloggedin: !this.state.isloggedin });
        console.log('work');
    }

    render() {
      
        const isloggedIn = this.state.isloggedin;
    let button;

        if (isloggedIn) {
        /* login or Logout buttons are components so only take the input from parent 
        that why onClick is 'handling event' not working when calls parent component */
        button = <LogoutButtton onClick={() => this.handleClick()}/>;
    } else {
      button = <LoginButtton onClick={() => this.handleClick()}/>;
    }

    return (
      <React.Fragment>
        
            <Greeting isloggedin={this.state.isloggedin}  />
            <button onClick={() => this.handleClick()}>click</button>
        <button onClick={() => this.handleClick()}>{ button}</button>

            {button}
            <FormPage/>
            
      </React.Fragment>
    );
  }
}
