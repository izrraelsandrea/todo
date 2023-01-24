import TodoListItems from "./TodoListItems";
import classes from "./TodoList.module.css";
const TodoList = (props) => {
    return (
      <ul className={classes.ul}>
        <TodoListItems data={props.items} />
      </ul>
    );

};

export default TodoList;
