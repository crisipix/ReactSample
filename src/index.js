// Tell our React app where to hook into the DOM (in our index.html)
// ReactDOM.render is the function that tells React what to render
//  and where to render it — component called App
// It'll find the root element in index.html and render app there. 
import React from "react";
import ReactDOM from "react-dom";
// import {Router, Route, IndexRoute, hashHistory} from "react-router"
import { HashRouter, Route, Link,IndexRoute,
    Switch,
    Redirect
} from 'react-router-dom';
import App from "./App.js";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import NoMatch from "./components/NoMatch";
import Home from "./pages/Home.js";
import Featured from "./pages/Featured.js";
import Archived from "./pages/Archived.js";
import Settings from "./pages/Settings.js";
import "./Index.css";
import { AppContainer } from 'react-hot-loader';

// Render the router and not the app anymore
//  ReactDOM.render(<App />, document.getElementById("root"));
const root = document.getElementById("root")
ReactDOM.render(
    <HashRouter>
        <div>
        <Nav></Nav>
        <Route path="/" component={App}></Route>
        <Route path="/Home" component={Home}></Route>
        <Route path="/Featured" component={Featured}></Route>
        <Route path="/Archived" component={Archived}></Route>
        <Route path="/Settings" component={Settings}></Route>
        {/* <Route path="/product/:id" component={ProductView} /> */}

        {/* <Switch>
        <Route path="/" component={App}></Route>
        <Redirect from="/" to="/Home" />
         <Route path="/Home" component={Home}></Route>
         <Route path="/Featured" component={Featured}></Route>
         <Route path="/Archived" component={Archived}></Route>
         <Route path="/Settings" component={Settings}></Route>
          <Route component={NoMatch} />
        </Switch> */}
        <Footer></Footer>        
        </div>
    </HashRouter>, root);


// const render = Component => {
//     ReactDOM.render(
//       <AppContainer>
//         <Component />
//       </AppContainer>,
//       document.getElementById('root')
//     );
//   }
// render(App);

// // webpack Hot Module Replacement API
// if (module.hot) {
//     console.log('HOOOOOT');
//     // keep in mind - here you are configuring HMR to accept CHILDREN MODULE
//     // while `hot` would configure HMR for the CURRENT module
//     module.hot.accept('./App.js', () => {
//       // if you are using harmony modules ({modules:false})
//       render(App)
//       // in all other cases - re-require App manually
//       render(require('./App.js'))
//     })
//   }