import React, { Component } from "react";
import { connect } from "react-redux";
import { completeToDo } from "../actions";

class ToDoListItem extends Component {
  handleCompleteClick = completeToDoId => {
    const { completeToDo } = this.props;
    completeToDo(completeToDoId);
  };

  render() {
    const { todoId, todo } = this.props;
    return (
      <div
        key="toDoName"
        className="col s10 offset-s1 to-do-list-item pink accent-4"
      >
        <h6>
          {todo.title}{" "}
          <span
            onClick={() => this.handleCompleteClick(todoId)}
            className="complete-todo-item waves-effect waves-light teal lighten-5 teal-text text-darken-4 btn"
          >
            <i className="medium material-icons">done</i>
          </span>
        </h6>
      </div>
    );
  }
}

export default connect(
  null,
  { completeToDo }
)(ToDoListItem);
