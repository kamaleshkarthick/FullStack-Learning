import React, { Component } from "react";

export default class MyClock extends Component {
  render() {
      return <React.Fragment>
          <h2> Class Component</h2>
          <h4>Now Time is { this.props.date.toLocaleTimeString()}</h4>
    </React.Fragment>;
  }
}