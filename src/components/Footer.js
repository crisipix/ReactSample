import React, { Component} from "react";
import {hot} from "react-hot-loader";

class Footer extends Component{
  render(){
    return(
      <div className="Header">
        <hr/>
        <h1> Footer</h1>
        <hr/>
      </div>
    );
  }
}


 export default hot(module)(Footer);
//export default Footer;