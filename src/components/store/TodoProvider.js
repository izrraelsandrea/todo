import { useReducer, useState } from "react";
import TodoContext from "./todo-context";

const defaultPointsState = {
  points: 0,
};
const pointsReducer = (state, action) => {
  if (action.type === "ADD") {
    const TotalPoints = state.points + action.points;
    return { points: TotalPoints };
  }
  if (action.type === "REMOVE") {
    const TotalPoints = state.points - action.points;
    return { points: TotalPoints };
  }
};

const PointsProvider = (props) => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todoData) => {
    console.log(todoData);
    setTodoList((prev) => {
      return [...prev, todoData];
    });
  };
  const toogleTodo = (id) => {
    const toogleTodoindex = todoList.findIndex((todo) => {
      return todo.id === id;
    });
    setTodoList((prev) => {
      let newTodoList = [...prev];

      if (!newTodoList[toogleTodoindex].open) {
        newTodoList[toogleTodoindex].open = true;
        removePointsHandler(toogleTodoindex);
      } else {
        newTodoList[toogleTodoindex].open = false;
        addPointsHandler(toogleTodoindex);
      }
      return newTodoList;
    });
  };
  const removeTodo = (id) => {
    const toogleTodoIndex = todoList.findIndex((todo) => todo.id === id);
    const updatedTodos = todoList.filter((todo) => todo.id !== id);
    removePointsHandler(toogleTodoIndex);
    setTodoList(updatedTodos);
  };

  const [pointsState, dispatchPointsAction] = useReducer(
    pointsReducer,
    defaultPointsState
  );

  const addPointsHandler = (toogleTodoindex) => {
    dispatchPointsAction({
      type: "ADD",
      points: todoList[toogleTodoindex].points,
    });
  };
  const removePointsHandler = (toogleTodoindex) => {
    dispatchPointsAction({
      type: "REMOVE",
      points: todoList[toogleTodoindex].points,
    });
  };
  const todoContext = {
    todoList: todoList,
    points: pointsState.points,
    toogleTodo: toogleTodo,
    addTodo: addTodo,
    removeTodo: removeTodo,
    addPoints: addPointsHandler,
    removePoints: removePointsHandler,
  };

  return (
  
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
};
export default PointsProvider;
