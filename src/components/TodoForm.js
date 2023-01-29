import { useRef, useContext } from "react";
import classes from "./TodoForm.module.css";
import TodoContext from "./store/todo-context";

const TodoForm = (props) => {
    const todoCtx = useContext(TodoContext);

    const todoInputRef = useRef();
    const pointsInputRef = useRef();

    const addTodoHandler = (event) => {
        event.preventDefault();
        let todoData = {
            id: Math.random(),
            description: todoInputRef.current.value,
            points: parseInt(pointsInputRef.current.value),
            open: true
        }
        todoCtx.addTodo(todoData);
        todoInputRef.current.value="";
        pointsInputRef.current.value="";
    }

    return(
        <form onSubmit={addTodoHandler} className={classes["main-form"]}>
            <label htmlFor="todo">ToDo</label>
            <input className={classes.box} type="text" id="todo" name="todo" ref={todoInputRef} />
            <label htmlFor="ponts">Points</label>
            <input className={classes.box} type="number" id="points" name="points" ref={pointsInputRef} />
            <button className={classes.btn}>Add Todo</button>
        </form>
    );
}
export default TodoForm;