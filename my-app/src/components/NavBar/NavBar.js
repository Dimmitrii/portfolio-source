import React from "react";

import "./navbar.css";
import NavBarItems from "./NavBarItems";
import LeaveButton from "../Auth/leaveButton/leaveButton";

const NavBar = (props)=>{
    return(
        <div className="navbar">
            <NavBarItems items={props.items}/>
            <LeaveButton/>
        </div>
    )
}

export default NavBar