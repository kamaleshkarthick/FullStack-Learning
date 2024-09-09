import React,{Component} from "react";

export default class MyStateClock extends Component{
    constructor() {
        super();
        this.state = {date:  new Date()};
    }


    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <React.Fragment>
                <h2>State Component</h2>
                <h4>Now Time is { this.state.date.toLocaleTimeString() }</h4>
            </React.Fragment>
        );
    }
}