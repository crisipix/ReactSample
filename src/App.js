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
        this.state = { Name: "Chris",
                       ApplicationName : "React Starter"
                    };
    }
    getVal()
    {
        return "From Functions...";
    }
    changeAppName(newName)
    {
      this.setState({ApplicationName: newName});
    }

  render(){
    setTimeout(() => {
      this.setState({Name: "Connor"})
  },1000);
    return(
      <div className="App">
      {/* Fire on the higher component not the child */}
      <Header changeAppName={this.changeAppName.bind(this)} applicationName={this.state.ApplicationName}></Header>
        <h1> Hello, World! {this.getVal()}</h1>
        <h1> State Property {this.state.Name}</h1>
      <Footer></Footer>
        
      </div>
    );
  }
}

 export default hot(module)(App)
//export default App
