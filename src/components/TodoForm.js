import { useRef } from "react";
import classes from "./TodoForm.module.css";

const TodoForm = (props) => {
    const todoInputRef = useRef();
    const pointsInputRef = useRef();

    const addTodoHandler = (event) => {
        event.preventDefault();
        let todoData = {
            id: Math.random(),
            description: todoInputRef.current.value,
            points: pointsInputRef.current.value
        }
        props.onAdd(todoData);
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