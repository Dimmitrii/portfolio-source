import React from "react";

export default class VideoPage extends React.Component {
    constructor(props) {
      super(props);
  
      this.videoTag = React.createRef();
  
      this.state = {
        loading: false
      };
    }
  
    componentDidMount() {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(this.handleStream)
        .catch(err => console.log(err));
    }
  
    handleStream = async stream => {
      // start receiving stream from webcam
      this.videoTag.current.srcObject = stream;
  
      console.log("The video is ready");
    };
  
    render() {
      return (
        <div>
          <div style={{ paddingTop: 20 }}>
            <video
              id="myvideo"
              ref={this.videoTag}
              width={426}
              height={240}
              autoPlay
              title="video"
            />
          </div>
        </div>
      );
    }
  }