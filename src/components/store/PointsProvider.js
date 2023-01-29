import { useReducer } from "react";
import PointsContext from "./points-context";


const defaultPointsState = {
    points:0
}
const pointsReducer = (state, action) => {
    if (action.type==='ADD'){
        const TotalPoints = state.points + action.points;
        console.log('State Points:',state.points);
        console.log('Action Points:',action.points);
        console.log('TotalPoints:',TotalPoints);
        return {points: TotalPoints};
    }
    if (action.type==='REMOVE'){
        const TotalPoints = state.points - action.points;
        console.log('State Points:',state.points);
        console.log('Action Points:',action.points);
        console.log('TotalPoints:',TotalPoints);
        return {points: TotalPoints};
        
    }
}

const PointsProvider = props => {

const [pointsState, dispatchPointsAction] = useReducer(pointsReducer,defaultPointsState);

    const addPointsHandler = points => {
        console.log('Adding');
        dispatchPointsAction({type: 'ADD', points:points});
    }
    const removePointsHandler = points => {
        console.log('Removing');
        dispatchPointsAction( {type: 'REMOVE', points:points })
    }
     const pointsContext = {
        points: pointsState.points,
        addPoints: addPointsHandler,
        removePoints: removePointsHandler,
     };

    return <PointsContext.Provider value={pointsContext}>
        {props.children}
    </PointsContext.Provider>
 };
 export default PointsProvider;