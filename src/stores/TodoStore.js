import { observable, computed, action } from "mobx";

class TodoStore {
  @observable todos = [];

  @action("Add todo")
  addTodo(todo) {
    this.todos.push(todo);
  }

  @computed
  get lastTodo() {
    return this.todos.length > 0 ? this.todos[this.todos.length] : null;
  }
}

const todoStore = new TodoStore();
export default todoStore;
