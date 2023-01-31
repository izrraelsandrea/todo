import { useRef, useContext, useState, useEffect } from "react";
import classes from "./TodoForm.module.css";
import TodoContext from "./store/todo-context";

const TodoForm = (props) => {
  const todoCtx = useContext(TodoContext);
  const isEditMode = todoCtx.isEditMode;
  const todoToEdit = todoCtx.todoToEdit;
  const [todo, setTodo] = useState({ description: "", points: "" });
  const todoInputRef = useRef();
  const pointsInputRef = useRef();

  useEffect(() => {
    if (isEditMode) {
      setTodo(todoToEdit);
    }
  }, [todoToEdit, isEditMode]);

  const submitTodoHandler = (event) => {
    event.preventDefault();
    let todoData = {
      id: Math.random(),
      description: todoInputRef.current.value,
      points: parseInt(pointsInputRef.current.value),
      open: true,
    };
    if (isEditMode) {
      todoCtx.updateTodo({
        ...todoToEdit,
        description: todo.description,
        points: parseInt(todo.points),
        open: true,
      });
      todoCtx.toogleEditMode();
    } else {
      todoCtx.addTodo(todoData);
    }
    setTodo({ description: "", points: "" });
  };

  return (
    <form onSubmit={submitTodoHandler} className={classes["main-form"]}>
      <label htmlFor="todo">ToDo</label>
      <input
        className={classes.box}
        value={todo.description}
        type="text"
        id="todo"
        name="todo"
        ref={todoInputRef}
        onChange={(e) =>
          setTodo((prevState) => ({
            ...prevState,
            description: e.target.value,
          }))
        }
      />
      <label htmlFor="ponts">Points</label>
      <input
        className={classes.box}
        value={todo.points}
        type="number"
        id="points"
        name="points"
        ref={pointsInputRef}
        onChange={(e) =>
          setTodo((prevState) => ({
            ...prevState,
            points: e.target.value,
          }))
        }
      />
      <button className={classes.btn}>
        {isEditMode ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
};
export default TodoForm;
