import React from 'react';
import {Link} from "react-router-dom";

const TechItem = (props) => {
  return (
    <div className="item-tech">
      <h3>
        <div className="float-left">{props.title}</div>
        <div className="float-right">
          <Link to={`tech/${props.id}`}><button className="btn btn-outline-secondary btn-sm mr-2">About</button></Link>
          <button className="btn btn-danger btn-sm" onClick = {()=>{props.onClick(props.id)}}>Remove</button>
        </div>
      </h3>
    </div>
  )
}

export default TechItem;