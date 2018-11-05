import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../actions";
import ToDoListItem from "./ToDoListItem";
import Preloader from "./Preloader";
import { Redirect } from "react-router-dom";

class ToDoList extends Component {
  state = {
    addFormValue: ""
  };

  handleInputChange = event => {
    this.setState({ addFormValue: event.target.value });
  };

  handleFormSubmit = event => {
    const { addFormValue } = this.state;
    const { addToDo, auth } = this.props;
    event.preventDefault();
    addToDo({ title: addFormValue }, auth.uid);
    this.setState({ addFormValue: "" });
  };

  renderAddForm = () => {
    const { addFormValue } = this.state;
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/" />;

    return (
      <div id="todo-add-form" className="col s10 offset-s1">
        <i className="material-icons">edit</i>
        <form onSubmit={this.handleFormSubmit}>
          <div className="input-field">
            <input
              value={addFormValue}
              onChange={this.handleInputChange}
              id="toDoNext"
              type="text"
            />
            <label htmlFor="toDoNext">What To Do Next</label>
          </div>
        </form>
      </div>
    );
  };

  renderToDos() {
    const { data } = this.props;
    const toDos = _.map(data, (value, key) => {
      return <ToDoListItem key={key} todoId={key} todo={value} />;
    });
    if (!_.isEmpty(toDos)) {
      return toDos;
    } else if (data === null) {
      return (
        <div className="col s10 offset-s1 center-align">
          <i className="large material-icons">done_all</i>
          <h4>You have completed all the tasks</h4>
        </div>
      );
    } else {
      return (
        <div className="row center-align">
          <div className="col s4 offset-s4">
            <Preloader />
          </div>
        </div>
      );
    }
  }

  componentDidMount() {
    const { auth } = this.props;
    this.props.fetchToDos(auth.uid);
  }

  render() {
    return (
      <div className="to-do-list-container">
        <div className="row">
          {this.renderAddForm()}
          {this.renderToDos()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ data, auth }) => {
  return {
    data,
    auth
  };
};

export default connect(
  mapStateToProps,
  actions
)(ToDoList);
