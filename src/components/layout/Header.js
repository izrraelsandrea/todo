import { useContext } from "react";
import classes from "./Header.module.css";
import PointsContext from "../store/points-context";

const Header = (props) => {
    const pointsCtx = useContext(PointsContext);
    return (
        <header className={classes.header}>
           <h1> Header </h1>
           <h2>{pointsCtx.points} pts</h2>
        </header>
    );
}

export default Header;