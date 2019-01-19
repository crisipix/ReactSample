import React, { Component} from "react";
// import react-hot-loader in App.js and mark the exported object
//  as hot-reloaded by modifying to code as follows.
import {hot} from "react-hot-loader";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! This is a test </h1>
      </div>
    );
  }
}

export default hot(module)(App);