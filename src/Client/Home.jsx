import React from "react";
import Style from "./home.module.css"
import { Link } from "react-router-dom";
const Home=()=>{
    return(
        <div id={Style.nav}>
            <Link to="/add">AddUser</Link>
            <Link to="/users">UserData</Link>
        </div>
    )
}
export default Home