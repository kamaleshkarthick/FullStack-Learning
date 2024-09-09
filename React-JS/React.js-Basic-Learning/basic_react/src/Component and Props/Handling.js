
import React ,{Component} from "react";

export default class HandleEvent extends Component{
    constructor() {
        super();
        this.state = {
            istoggle: false
        };
    }
    
    
    handleEve = () => {
        this.setState({ istoggle : !this.state.istoggle });
        console.log(this,this.state.istoggle)
    }


      
    render() {
        return (
            <>
                <h1>Handling</h1> 
                {
                    this.state.istoggle ? (
                        <div>
                            <p>Lorem Ipsum</p>

                            {/* <button onClick={ this.handleEve}>ShowLess</button> */}
                        </div>

                    ) :null
                         /* (<button onClick={ this.handleEve}>ShowMore</button>) */  
                }

                <button onClick={this.handleEve}>Click Here </button>

            </>
        );
    };

}