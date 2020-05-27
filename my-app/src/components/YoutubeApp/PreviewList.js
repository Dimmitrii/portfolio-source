import React from "react";

import Previewitem from "./PreviewItem"; 

const PreviewList = (props)=>{
    const videos = props.videos.map((item)=>{
        return <Previewitem url={item.url} id={item.videoId} changeVideo={props.changeVideo}/>
    });
    return(
        <>
        <div style={{margin:"0 auto",width:"730px"}}>{videos}</div>
        </>
    );
}

export default PreviewList;