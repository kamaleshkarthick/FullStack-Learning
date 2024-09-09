import React, { Component } from "react";

export default class Movement extends Component{
    constructor() {
        super();
        this.state = {
            MousePosition_x: 0,
            MousePosition_y: 0,
            WindowScroll_Y: 0,
        }
    }
    handleOnMouseMove = (e) => {
        this.setState({
            MousePosition_x:e.nativeEvent.offsetX ,
            MousePosition_y: e.nativeEvent.offsetY  });
    }
    componentDidMount() {
        window.addEventListener('scroll',this.handleWindowScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll',this.handleWindowScroll)
    }

    handleWindowScroll = (e) => {
        this.setState({WindowScroll_Y: (window.scrollY)});
    }
        
    render() {
        return (
            <>
                <section>
                    <div onMouseMove={this.handleOnMouseMove}>
                        <h3> Mouse Position</h3>
                        <p>X : { this.state.MousePosition_x}</p>
                        <p>Y : { this.state.MousePosition_y}</p>
                    </div>
                </section>

                <section>
                    <div>
                        <h3> Window Scroll</h3>
                        <p> Window Scroll_Y : { this.state.WindowScroll_Y}</p>
                        
                    </div>
                </section>
                
            </>
        );
    }
}