import React from "react";

import SearchForm from "./SearchFrom";
import PreviewList from "./PreviewList";
import YoutubePlayer from "./YoutubePlayer";
const axios = require('axios').default;
const youtubeUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCAY1GNH5AYSiDptYbAcj3QML5Q3LBIcug&q="

class YoutubeApp extends React.Component{
    state={
        videos:[],
        videoOnPlayer:"",
    }
    addImagesAndIds = (query)=>{
        axios.get(`${youtubeUrl}${query}`)
        .then(response=>{
            console.log(response);
            const videos = response.data.items.map(item=>{
                const {url} = item.snippet.thumbnails.default;
                const {videoId} = item.id;
                return {url,videoId};
            });
            console.log(videos);
            this.setState({videos,videoOnPlayer:response.data.items[0].id.videoId})
        })
        .catch(error=>{
            console.log(error)
        });
    }
    changeVideoOnPlayer = (id)=>{
        this.setState({videoOnPlayer:id})
    }
    render(){
        return(
            <div>
            <SearchForm  addQuery={this.addImagesAndIds}/>
            <YoutubePlayer video={this.state.videoOnPlayer}/>
            <PreviewList videos={this.state.videos} changeVideo={this.changeVideoOnPlayer}/>
            </div>
        );
    }
}

export default YoutubeApp;