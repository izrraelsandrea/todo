import { useContext } from "react";
import TodoListItems from "./TodoListItems";
import classes from "./TodoList.module.css";
import TodoContext from "./store/todo-context";

const TodoList = (props) => {
  const todoCtx = useContext(TodoContext);

    const toogleTodoHandler = (id) => {
        todoCtx.toogleTodo(id);
    }

    return (
      <ul className={classes.ul}>
        <TodoListItems onClick={toogleTodoHandler} data={todoCtx.todoList} />
      </ul>
    );

};

export default TodoList;
