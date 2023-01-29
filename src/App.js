import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Header from "./components/layout/Header";
import TodoContext from "./components/store/TodoProvider";

function App() {

  return (
    <TodoContext>
      <Header />
      <TodoForm />
      <TodoList />
    </TodoContext>
  );
}

export default App;
