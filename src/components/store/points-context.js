import React from "react";

const PointsContext = React.createContext({
todoList: [],
points: 0,
toogleTodo: (id) => {},
removeTodo: (id) => {},
addTodo: (todo) => {},
addPoints: (id) => {},
removePoints: (points) => {}
});

export default PointsContext;