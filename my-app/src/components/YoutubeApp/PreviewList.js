import React from "react";

import Previewitem from "./PreviewItem"; 

const PreviewList = (props)=>{
    const videos = props.videos.map((item)=>{
        return <Previewitem url={item.url} id={item.videoId} changeVideo={props.changeVideo}/>
    });
    return(
        <>
        {videos}
        </>
    );
}

export default PreviewList;