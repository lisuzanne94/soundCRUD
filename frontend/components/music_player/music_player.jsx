import React from "react";

class MusicPlayer extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         duration: 0,
    //         currentTime: 0
    //     }

    //     this.handleSeek = this.handleSeek.bind(this);
    // }

    componentDidMount () {
        this.props.receivePlayTrack(this.props.track)
    }

    // handleSeek (e) {
    //     // const track = document.getElementById("current-song");
    //     this.setState({ currentTime: e.currentTarget.value })
    //     console.log(this.state.currentTime)
    // }

    // getDuration () {
    //     const track = document.getElementById("current-song");
    //     return track.duration
    // }

    // pauseTrack () {
    //     const track = document.getElementById("current-song");
    //     track.pause()
    // }

    // playTrack () {
    //     const track = document.getElementById("current-song");
    //     track.play()
    // }

    render() {

        if (!this.props.track ) { return null }

        // console.log(document.getElementById("current-song") ? document.getElementById("current-song") : null)

        return (
            <div className="music-player-container">
                {/* <audio 
                    onLoadedMetadata={(e) => this.setState({ duration: e.target.duration})}
                    controls
                    autoPlay
                    className="music-player" 
                    id="current-song" 
                    src={this.props.track.trackFile} >
                </audio>

                <button onClick={this.pauseTrack}>Pause</button>
                <button onClick={this.playTrack}>Play</button>

                <div>
                    //round duration up
                    <input type="range" 
                        min="0"
                        max={this.state.duration}
                        onChange={this.handleSeek}
                    />
                </div> */}
            </div>
        )
    }
};

export default MusicPlayer;