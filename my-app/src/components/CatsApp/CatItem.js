import React from "react";

const moment = require('moment');

const CatItem= (props)=>{
    return(
        <>
            <li className={props.isRemoved? "list-group-item d-flex justify-content-between align-items-center removed" : "list-group-item d-flex justify-content-between align-items-center"}>
                <h6 onClick={props.isRemoved? ()=>{} : ()=>{props.selectCat(props.more)}}>{props.name}</h6>
                {props.shortInfo}<br/>
                {props.isRemoved? moment().format("YYYY.MM.DD HH:mm") : ""}
                <button type="button" className="close" aria-label="Close" onClick={()=>{props.removeAndUnRemove(props.id)}}>
                    {props.isRemoved ? <span aria-hidden="true">UR</span> : <span aria-hidden="true">&times;</span>}
                </button>
            </li>
        </>
    );
}

export default CatItem;