import React from "react";

const CoctailSettings = (props)=>{
    return(
        <>
        <div>
          <input type="text" placeholder="Поиск по имени" className="form-control" name="search"  value={props.value}  onChange={props.onChange}/>
        </div>
        </>
    );
}

export default CoctailSettings;