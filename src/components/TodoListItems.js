import { useContext } from "react";
import Card from "./UI/Card.js";
import classes from "./TodoListItems.module.css";
import TodoContext from "./store/todo-context.js";
const TodoListItems = (props) => {
  const todoCtx = useContext(TodoContext);

  const openItem = classes.list;
  const closeItem = classes.list + " " + classes.close;
  const { data } = props;

  const closeTodoHandler = (item) => {
    props.onClick(item.id);
  };
  const deleteTodoHandler = (item) => {
    todoCtx.removeTodo(item.id);
  };
  const editTodoHandler = (id) => {
    todoCtx.toogleEditMode(id);
  };

  return data.map((item) => {
    return (
      <Card key={item.id}>
        <li
          className={item.open ? openItem : closeItem}
          id={item.id}
          onClick={() => closeTodoHandler(item)}
        >
          {item.description} - {item.points} pts
        </li>
        <div
          className={classes.delete}
          onClick={() => editTodoHandler(item.id)}
        >
          Edit
        </div>
        <div className={classes.delete} onClick={() => deleteTodoHandler(item)}>
          Delete
        </div>
      </Card>
    );
  });
};

export default TodoListItems;
