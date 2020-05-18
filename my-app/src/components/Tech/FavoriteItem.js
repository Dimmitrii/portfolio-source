import React from 'react';

const TechFavoriteItem = (props) => {
  return (
  <div className="item-tech">
    <h3>
      <div className="float-left">{props.title}</div>
      <div className="float-right">
        <button className="btn btn-danger btn-sm" onClick = {()=>{props.onClick(props.id)}}>Удалить из избранного</button>
      </div>
    </h3>
  </div>
  )
}

export default TechFavoriteItem;