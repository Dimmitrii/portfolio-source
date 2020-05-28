import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./navbar.css";
import NavBarItems from "./NavBarItems";
import LeaveButton from "../Auth/leaveButton/leaveButton";
// import Chat from "../Chat/Chat";

const NavBar = (props)=>{
    return(
        <>
        <div className="navbar">
            <NavBarItems items={props.items}/>
            {!!localStorage.getItem("token")?<LeaveButton/>
            :
            <>
            <button className="btn btn-success" onClick={()=>{localStorage.setItem("token",Math.round(Math.random()*10000000)); props.history.push("/")}}>Login if register dont work</button>
            <Link to="/login" className="btn btn-success">Login</Link>
            </>}
            {/* <LeaveButton/> */}
            {/* <Chat/> */}
        </div>
        {/* <Chat/> */}
        </>
    )
}

export default withRouter(NavBar);