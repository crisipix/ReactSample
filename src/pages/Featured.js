import React, { Component} from "react";
import {hot} from "react-hot-loader";

class Featured extends Component{
  constructor()
  {
    super();
  }

  render(){
    console.log(this.props);
    return(
      <div className="App">
        <h1> Featured</h1>
      </div>
    );
  }
}
 export default hot(module)(Featured);
 //export default Featured