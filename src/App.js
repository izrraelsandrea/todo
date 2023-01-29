import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Header from "./components/layout/Header";
import PointsContext from "./components/store/PointsProvider";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodoHandler = (todoData) => {
    console.log(todoData);
    setTodoList((prev) => {
      return [...prev, todoData];
    });
  };
  const closeTodos = (id) => {
    const closedTodoIndex = todoList.findIndex((todo) => {
      return todo.id === id;
    });
    setTodoList((prev) => {
      let newTodoList = [...prev];

      if (!newTodoList[closedTodoIndex].open) {
        newTodoList[closedTodoIndex].open = true;
      } else {
        newTodoList[closedTodoIndex].open = false;
      }
      return newTodoList;
    });
  };
  const deleteTodos = (id) => {
    const updatedTodos = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodos);
  };

  return (
    <PointsContext>
      <Header />
      <TodoForm onAdd={addTodoHandler} />
      <TodoList onDelete={deleteTodos} onClose={closeTodos} items={todoList} />
    </PointsContext>
  );
}

export default App;
