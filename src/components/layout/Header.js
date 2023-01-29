import { useContext } from "react";
import classes from "./Header.module.css";
import TodoContext from "../store/todo-context";

const Header = (props) => {
    const pointsCtx = useContext(TodoContext);
    return (
        <header className={classes.header}>
           <h1> Header </h1>
           <h2>{pointsCtx.points} pts</h2>
        </header>
    );
}

export default Header;