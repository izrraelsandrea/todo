import { useContext } from "react";
import TodoListItems from "./TodoListItems";
import classes from "./TodoList.module.css";
import PointsContext from "./store/points-context";

const TodoList = (props) => {
  const todoCtx = useContext(PointsContext);

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
