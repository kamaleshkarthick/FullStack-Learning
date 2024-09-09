import React, { Component } from "react";
import "./App.css";
import StateLearn from "./Component and Props/ClassComponent";
/* import Funcl from "./Component and Props/FunctionComponent"; */

class App extends Component {

  render() {
    return (

      <div className="App">
        <header className="App-header">

          <h1> Parent Component</h1>

          <StateLearn />
  
        </header>
      </div>

    );
  }
}

export default App;
