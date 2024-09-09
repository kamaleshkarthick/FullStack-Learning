import React, { Component } from "react";

export default class InputEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseDown: false,
      mouseClicked: 0,
      inputText: "Input Text",
      formInputText: "Form",
    };
    }


    /* handleClick = () => {
        this.setState({
            mouseClicked: this.state.mouseClicked + 1
        })
    } */
  handleClick = () => {
      //In setstate we call function , pass valuse from 'this.state' 
        this.setState((state) => {
         return {   mouseClicked: state.mouseClicked + 1}
        })
    }
    /* handleMouseDown = () => {
        this.setState({ mouseDown: true });
        console.log('mouse do')
    } */

    handleMouseDown = () => {
        // console.log('mouse do')
        this.setState((state) => {
            return { mouseDown: true }
        });
    }
   
    handleMouseUp = () => {
        // console.log('mouse do')
        this.setState((state) => {
            return {   mouseDown: false}
           })
  }
  
  handleOnChange = (e) => {
    this.setState({
      inputText: e.target.value,
      // state : 'state Updated from events'
    });
  }


  handleFormOnChange = (e) => {
    this.setState({
      formInputText : e.target.value
    });
  }
  handleonSubmit = (e) => {
    e.preventDefault()
    
    this.setState({
      formSubmit: this.state.formInputText,
    
    });
  }

  render() {
    return (
      <>
        <section>
          <h3>MOUSE EVENTS</h3>
                <button 
                    onClick={this.handleClick}
                    onMouseDown={this.handleMouseDown}
                    onMouseUp={this.handleMouseUp}
                >    Click Me </button>
          <p>button mouse Down : {this.state.mouseDown ? "True" : "False"}</p>
          <p>button mouseClicked : {this.state.mouseClicked}</p>
        </section>

        <section>
          <h3>Input change events:</h3>
          <input
            onChange={this.handleOnChange}
            type="text" value={this.state.inputText} />
          <p>lnput value:{this.state.inputText}</p>
        </section>

        <section>
          <h3>Form Submit Events</h3>
          <form onSubmit={this.handleonSubmit}>

            <input
              onChange={this.handleFormOnChange}
              type="text" value={this.state.formInputText} />
            
            <button type="submit">Submit</button>
            <p>lnput value : {this.state.formInputText}</p>
            <p>Submit value : {this.state.formSubmit}</p>
          </form>

        </section>
      </>
    );
  }
}
