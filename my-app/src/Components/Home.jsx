import { Component } from "react";

class Home extends Component{
    render(){
        return(
            <h3>{this.props.greet} </h3>
        )
    }
}
export default Home;