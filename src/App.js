import React, { Component } from "react";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Addbook from "./Components/AddBook/Addbook";
// import Pop from "./Components/Popupp/Pop";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
        <Switch>
          <Route exact path="/">
          <Login />
          </Route>
          <Route exact path="/header">
           <Header/>
          </Route>
          <Route exact path="/register">
            <Register/>
          </Route>
        </Switch>
      </Router>  
     
     
        {/* <Addbook/> */}
        {/* <Pop/> */}
      </div>
    );
  }
}
export default App;
