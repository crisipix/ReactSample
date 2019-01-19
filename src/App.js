import React, { Component} from "react";
// import react-hot-loader in App.js and mark the exported object
//  as hot-reloaded by modifying to code as follows.
import {hot} from "react-hot-loader";
import "./App.css";
import Header from "./components/Header"
import Footer from "./components/Footer"

class App extends Component{
    // must call super on first line
    constructor(){
        super()
        this.cName = "Will";
    }
    getVal()
    {
        return "Mike!";
    }

  render(){
    const name = 'Mike';
    return(
      <div className="App">
      <Header></Header>
        <h1> Hello, World! This is a test {this.getVal()}</h1>
        <h1> Constructor Property {this.cName}</h1>
      <Footer></Footer>
        
      </div>
    );
  }
}

export default hot(module)(App);