import React from "react";

const YoutubePlayer = (props)=>{
    return(
        <>
         <div style={{margin:"0 auto",width:"730px"}}><iframe width="730" height="500" src={`https://www.youtube.com/embed/${props.video}`} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title="myFrame"></iframe></div>
        </>
    );
}

export default YoutubePlayer;