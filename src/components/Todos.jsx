import React, { Component } from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";

import todoStore from "../stores/TodoStore";

@observer
class Todos extends Component {
  state = {
    inputVal: ""
  };

  render() {
    const todos = todoStore.todos;

    return (
      <div>
        <ul>
          Todos: <br />
          {todos && todos.map((todo, i) => <Todo key={i} task={todo} />)}
        </ul>
        New todo:
        <input
          type="text"
          value={this.state.inputVal}
          onChange={e => this.setState({ inputVal: e.target.value })}
        />
        <button
          onClick={e => {
            todoStore.addTodo(this.state.inputVal);
            this.setState({ inputVal: "" });
          }}
        >
          save
        </button>
      </div>
    );
  }
}

export default Todos;

const Todo = ({ task }) => <li>{task}</li>;

Todo.propTypes = {
  task: PropTypes.string
};
