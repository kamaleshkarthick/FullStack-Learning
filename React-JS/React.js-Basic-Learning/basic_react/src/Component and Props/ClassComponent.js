import React, { Component } from "react";
import Funcl from "./FunctionComponent";
import HandleEvent from "./Handling";

class StateLearn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Good Morning",
      sayHello: "Hello sir !!",
      course: "react.js",
      displayInfo: false,
    };
    this.showLess = this.showLess.bind(this);
  }

  handleClick() {
    this.setState({ course: "vue.js" });
  }
  showMore() {
    // console.log("StateLearn", this)
    this.setState({ displayInfo: !this.state.displayInfo });
  }

  showLess() {
    this.setState({ displayInfo: !this.state.displayInfo });
  }
  render() {
    return (
      <>
        <h2> Hello There! {this.state.greeting}</h2>
        <Funcl word="Course" courseName={this.state.course} />

        {this.state.displayInfo ? (
          <div>

            <p>It is a long established fact that a reader </p>
            <p>The point of using Lorem Ipsum is that content here</p>
            <button onClick={this.showLess}>ShowLess</button>

          </div>
        ) : (
          <button onClick={() => this.showMore()}>ShowMore</button>
        )}
        <HandleEvent/>
        
        <button onClick={this.handleClick.bind(this)}>Next Course</button>
      </>
    );
  }
}

export default StateLearn;

/* class Kira extends Component {
    render() {
        return (
            <>
                <h1> There </h1>
            </>
        );
    }
} 
export {  Kira, Life};
 */
