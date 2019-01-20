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
        <section class="hero is-medium is-primary is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Archived</h1>
            <h2 class="subtitle"> Archive Information</h2>
          </div>
        </div>
      </section>
    );
  }
}
 export default hot(module)(Archived);
 //export default Archived