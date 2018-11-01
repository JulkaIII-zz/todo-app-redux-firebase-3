import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ToDoList from "./components/ToDoList";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import requireAuth from "./components/auth/requireAuth";
import { connect } from "react-redux";
import { fetchUser } from "./actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/todos" component={requireAuth(ToDoList)} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  { fetchUser }
)(App);
