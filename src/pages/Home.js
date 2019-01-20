import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Header from "../components/Header"

class Home extends Component{
  constructor()
  {
    super();
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
    console.log(this.props);
    return(
      <div className="Main">
        {/* Fire on the higher component not the child */}
        <Header changeAppName={this.changeAppName.bind(this)} applicationName={this.state.ApplicationName}></Header>
        <section class="hero is-medium is-info is-bold">
            <div class="hero-body">
            <div class="container">
                <h1 class="title">Home</h1>
                <h2 class="subtitle"> Primary Information</h2>
                    <h1> Hello, World! {this.getVal()}</h1>
                    <h1> State Property {this.state.Name}</h1>
            </div>
            </div>
        </section>
      </div>
    );
  }
}
 export default hot(module)(Home);
 //export default Main