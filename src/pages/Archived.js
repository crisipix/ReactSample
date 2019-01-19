import React, { Component} from "react";
import {hot} from "react-hot-loader";

class Archived extends Component{
  constructor()
  {
    super();
  }

  render(){
    console.log(this.props);
    return(
      <div className="App">
        <h1> Archived</h1>
      </div>
    );
  }
}
 export default hot(module)(Archived);
 //export default Archived