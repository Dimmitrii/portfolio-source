import React from "react";

const YoutubePlayer = (props)=>{
    return(
        <>
         <iframe width="730" height="500" src={`https://www.youtube.com/embed/${props.video}`} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title="myFrame"></iframe>
        </>
    );
}

export default YoutubePlayer;