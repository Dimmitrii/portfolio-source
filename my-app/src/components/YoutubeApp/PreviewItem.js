import React from "react";

const PreviewItem = (props)=>{
    return(
        <>
        <img src={props.url} onClick={()=>{props.changeVideo(props.id)}} alt=""/>
        </>
    );
}

export default PreviewItem;