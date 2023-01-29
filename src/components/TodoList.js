import TodoListItems from "./TodoListItems";
import classes from "./TodoList.module.css";
const TodoList = (props) => {
    const closeTodoHandler = (id) => {
        props.onClose(id);
    }
    const deleteTodoHandler = (id) => {
      props.onDelete(id);
    }
    return (
      <ul className={classes.ul}>
        <TodoListItems onDelete={deleteTodoHandler} onClick={closeTodoHandler} data={props.items} />
      </ul>
    );

};

export default TodoList;
