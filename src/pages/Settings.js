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
        <section class="hero is-medium is-light is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Settings</h1>
            <h2 class="subtitle"> Settings Content</h2>
          </div>
        </div>
      </section>
    );
  }
}
 export default hot(module)(Settings);
 //export default Settings