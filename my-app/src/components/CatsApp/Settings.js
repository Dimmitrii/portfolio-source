import React from "react";

const Settings = (props)=>{
    return(
        <>
        <div>
          <input type="text" placeholder="Поиск по имени" className="form-control" name="search"  value={props.value}  onChange={props.search}/>
        </div>
        </>
    );
}

export default Settings;