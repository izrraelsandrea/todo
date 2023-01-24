import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Header from "./components/layout/Header";

function App() {
  const [todoList, setTodoList] = useState([]);

const addTodoHandler = (todoData) => {
  console.log(todoData);
  setTodoList(prev => {
    return [...prev,todoData]
  });
  }


  return (
    <>
    <Header />
    <TodoForm onAdd={addTodoHandler} />
    <TodoList items={todoList}/>
    </>
  );
}

export default App;
