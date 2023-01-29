import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Header from "./components/layout/Header";
import PointsContext from "./components/store/PointsProvider";

function App() {


  // const deleteTodos = (id) => {
  //   const updatedTodos = todoList.filter((todo) => todo.id !== id);
  //   setTodoList(updatedTodos);
  // };

  return (
    <PointsContext>
      <Header />
      <TodoForm />
      <TodoList />
    </PointsContext>
  );
}

export default App;
