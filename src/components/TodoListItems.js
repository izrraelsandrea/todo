import Card from "./UI/Card.js";
import classes from "./TodoListItems.module.css";
const TodoListItems = (props) => {
    const {data} = props;
    return (
        data.map((item) => {
            return (
            <Card>
            <li key={item.id} className={classes.list} >
                {item.description} - {item.points} pts
            </li>
            </Card>
            )
        })

    );
}

export default TodoListItems;