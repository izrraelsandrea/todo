import React from "react";

const PointsContext = React.createContext({
points: 0,
addPoints: (points) => {},
removePoints: (points) => {}
});

export default PointsContext;