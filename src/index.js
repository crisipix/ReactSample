// Tell our React app where to hook into the DOM (in our index.html)
// ReactDOM.render is the function that tells React what to render
//  and where to render it — component called App
// It'll find the root element in index.html and render app there. 
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
ReactDOM.render(<App />, document.getElementById("root"));