import React from "react";
import flv from "flv.js";
import Loader from "../UI/Loader";
// import ReactHLS from 'react-hls';

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }
  componentDidMount() {
    this.buildPlayer();
  }
  componentDidUpdate() {
    this.buildPlayer();
  }
  componentWillUnmount() {
    this.player.destroy();
  }
  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }
    this.player = flv.createPlayer({
      type: "flv",
      //url: `http://localhost:8000/live/${this.props.id}/index.m3u8`,
      url: `http://localhost:8000/live/${this.props.id}.flv`,
      isLive: true,
      cors: true,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }
  render() {
    if (!this.props.stream) {
      return <Loader />;
    }
    if (this.props.preview===true){
      return <video ref={this.videoRef} style={{ width: "100%" }} />;
    }
    return <video controls ref={this.videoRef} style={{ width: "100%" }} />;
  }
}

export default StreamShow;
