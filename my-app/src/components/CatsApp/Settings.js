import React,{ useEffect,useRef } from "react";

const Settings = (props)=>{
  const inputRef = useRef();

  useEffect(()=>{
    inputRef.current.focus();
  },[]);

    return(
        <>
        <div>
          <input ref={inputRef} type="text" placeholder="Search by name" className="form-control" name="search"  value={props.value}  onChange={props.search}/>
        </div>
        </>
    );
}

export default Settings;