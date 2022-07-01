import React from "react";
import { NavLink } from "react-router-dom";

const NavBarItems = (props)=>{
    const {items} = props;
    const BarItems =
        Array.isArray(items) ?  items.map((item,index)=>{
            return (<NavLink to={item.path} activeClassName="active" key={index}>
                        <i className="fa fa-fw ">{item.text}</i>
                    </NavLink>)
            }) : false;
    return(
    <div style={{display:"flex"}}>
        <NavLink exact to="/" activeClassName="active">
            <i className="fa fa-fw ">Home</i>
        </NavLink>
        {BarItems}
    </div>
    )
}

export default NavBarItems;