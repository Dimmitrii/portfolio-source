import React from "react";

const moment = require('moment');

const CatItem= (props)=>{
    return(
        <li className={props.isRemoved? "list-group-item d-flex removed" : "list-group-item d-flex"}>
            <h6 onClick={props.isRemoved? ()=>{} : ()=>{props.selectCat(props.more)}} style={{cursor:"pointer",margin:"0 20px 0 0",width:"150px"}}>{props.name}</h6>
            <text style={{margin:"0 20px 0 0"}}>{props.shortInfo}<br/>
            {props.isRemoved? moment().format("YYYY.MM.DD HH:mm") : ""}</text><br/>
            <button type="button" className="close" aria-label="Close" onClick={()=>{props.removeAndUnRemove(props.id)}} style={{marginLeft:"auto"}}>
                {props.isRemoved ? <span aria-hidden="true">UR</span> : <span aria-hidden="true">&times;</span>}
            </button>
        </li>
    );
}

export default CatItem;