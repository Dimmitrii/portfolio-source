import React from "react";

import "./navbar.css";
import NavBarItems from "./NavBarItems";
import LeaveButton from "../Auth/leaveButton/leaveButton";
import Chat from "../Chat/Chat";

const NavBar = (props)=>{
    return(
        <>
        <div className="navbar">
            <NavBarItems items={props.items}/>
            {!!localStorage.getItem("token")?<LeaveButton/>:false}
            {/* <LeaveButton/> */}
            {/* <Chat/> */}
        </div>
        <Chat/>
        </>
    )
}

export default NavBar