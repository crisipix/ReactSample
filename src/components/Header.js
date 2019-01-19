import React, { Component} from "react";
import {hot} from "react-hot-loader";

class Header extends Component{
  constructor()
  {
    super();


  }

  // you need a change detection handler
  handleChange(e){
    const name = e.target.value;
    this.props.changeAppName(name);
  }

  render(){
    console.log(this.props);
    return(
      <div className="Header">
        <h1> Header | {this.props.applicationName}</h1>
        <hr/>
        <input value={this.props.applicationName} onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}
 export default hot(module)(Header);
 //export default Header