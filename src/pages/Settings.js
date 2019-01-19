import React, { Component} from "react";
import {hot} from "react-hot-loader";

class Settings extends Component{
  constructor()
  {
    super();
  }

  render(){
    console.log(this.props);
    return(
      <div className="App">
        <h1> Settings</h1>
      </div>
    );
  }
}
 export default hot(module)(Settings);
 //export default Settings