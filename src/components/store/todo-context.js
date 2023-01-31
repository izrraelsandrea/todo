import React from "react";

const TodoContext = React.createContext({
  todoList: [],
  points: 0,
  isEditMode: false,
  todoToEdit: {},
  toogleTodo: (id) => {},
  removeTodo: (id) => {},
  addTodo: (todo) => {},
  addPoints: (id) => {},
  removePoints: (points) => {},
  toogleEditMode: (id) => {},
  updateTodo: () => {},
});

export default TodoContext;
