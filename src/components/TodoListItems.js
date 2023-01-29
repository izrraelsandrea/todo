import { useContext } from "react";
import Card from "./UI/Card.js";
import classes from "./TodoListItems.module.css";
import PointsContext from "./store/points-context.js";
const TodoListItems = (props) => {
    const pointsCtx = useContext(PointsContext);

   const openItem = classes.list;
   const closeItem = classes.list + ' ' + classes.close;
   const {data} = props;

   
   const closeTodoHandler = (item) => {
    if (item.open){
        pointsCtx.addPoints(item.points);
    }else{
        pointsCtx.removePoints(item.points);
    }
   props.onClick(item.id);
   }
   const deleteTodoHandler = (item) => {
    pointsCtx.removePoints(item.points);
    props.onDelete(item.id);
   }
   
   return (
        data.map((item) => {
            return (
            <Card key={item.id}>
            <li className={ item.open ? openItem : closeItem } id={item.id} onClick={() => closeTodoHandler(item) } >
                {item.description} - {item.points} pts
            </li>
            <div className={classes.delete} onClick={() => deleteTodoHandler(item)}>Delete</div>
            </Card>
            )
        })

    );
}

export default TodoListItems;