import React from "react";

import CatItem from "./CatItem";

const ListOfCats = (props)=>{
    const cats = props.cats.map(cat=>{
        return (<CatItem key={cat.id} name={cat.name} shortInfo={cat.shortInfo}  id={cat.id} more={cat.more} selectCat={props.selectCat} isRemoved={cat.isRemoved} removeAndUnRemove={props.removeAndUnRemove}/>)
    });
    return(
        <>
        <div className="float-left">
            <ul className="list-group">
                {cats}
            </ul>
        </div>
        </>
    );
}

export default ListOfCats;