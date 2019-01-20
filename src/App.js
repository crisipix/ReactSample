import React, { Component} from "react";
import { HashRouter, Route, Link,IndexRoute } from 'react-router-dom';

// import react-hot-loader in App.js and mark the exported object
//  as hot-reloaded by modifying to code as follows.
import {hot} from "react-hot-loader";
import "./App.css";
 import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Home from "./pages/Home.js";
import Featured from "./pages/Featured.js";
import Archived from "./pages/Archived.js";
import Settings from "./pages/Settings.js";
class App extends Component{
    // must call super on first line
    constructor(){
        super()
        
    }

  render(){
    setTimeout(() => {
      this.setState({Name: "Connor"})
  },1000);
    return(
   
      <div className="App">
         {/* <Route path="/Home" component={Main}></Route>
         <Route path="/Featured" component={Featured}></Route>
         <Route path="/Archived" component={Archived}></Route>
         <Route path="/Settings" component={Settings}></Route> */}
        <section class="hero is-medium is-info is-bold">
          {this.props.children} 
        </section>     
      </div>
    );
  }
}

 export default hot(module)(App)
//export default App
