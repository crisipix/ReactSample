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
        <section class="hero is-medium is-warning is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Featured</h1>
            <h2 class="subtitle"> Featured Content</h2>
          </div>
        </div>
      </section>
    );
  }
}
 export default hot(module)(Featured);
 //export default Featured