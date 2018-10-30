import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ToDoList from "./components/ToDoList";
import SignIn from "./components/SignIn";
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
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/app" component={requireAuth(ToDoList)} />
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
