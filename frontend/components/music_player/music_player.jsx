// import React from "react";
// import { Link } from "react-router-dom";

// class MusicPlayer extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             duration: 0,
//             currentTime: 0
//         }

//         this.handleSeek = this.handleSeek.bind(this);
//     }

//     componentDidMount () {
//         this.props.receivePlayTrack(this.props.track)
//     }

//     componentWillUnmount () {
//         this.props.clearPlayTrack();
//     }

//     handleSeek (e) {
//         // const track = document.getElementById("current-song");
//         this.setState({ currentTime: e.currentTarget.value })
//         console.log(this.state.currentTime)
//     }

//     getDuration () {
//         const track = document.getElementById("current-song");
//         return track.duration
//     }

//     pauseTrack () {
//         const track = document.getElementById("current-song");
//         track.pause()
//     }

//     playTrack () {
//         const track = document.getElementById("current-song");
//         track.play()
//     }

//     render() {

//         if (!this.props.track ) { return null }

//         const { track } = this.props;

//         // console.log(document.getElementById("current-song") ? document.getElementById("current-song") : null)

//         return (
            // <div className="music-player-bar-container">
            //     <div className="current-track-details">
            //         <h3>Now playing: <Link className="current-track-title" to={`/tracks/${track.id}`}>{track.title}</Link></h3>
            //         <p>Uploaded by: <Link className="current-track-uploader" to={`/users/${track.uploader.id}`}>{track.uploader.username}</Link></p>
            //     </div>

            //     <div className="music-player-container">
            //     <audio 
            //         onLoadedMetadata={(e) => this.setState({ duration: e.target.duration})}
            //         controls
            //         autoPlay
            //         controlsList="nodownload"
            //         className="music-player" 
            //         id="current-song" 
            //         src={this.props.track.trackFile} >
            //     </audio>

            //     <button onClick={this.pauseTrack}>Pause</button>
            //     <button onClick={this.playTrack}>Play</button>

            //     <div>
            //         //round duration up
            //         <input type="range" 
            //             min="0"
            //             max={this.state.duration}
            //             onChange={this.handleSeek}
            //         />
            //     </div>
            // </div>

            // </div>
//         )
//     }
// };

// export default MusicPlayer;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MusicPlayer = ({ track, receivePlayTrack, clearPlayTrack }) => {
    const [state, setState] = useState({
        duration: 0,
        currentTime: 0
    })

    const currentTrack = document.getElementById("current-song");

    useEffect(() => {
        receivePlayTrack(track);
        return clearPlayTrack;
    }, [track]);

    const handleSeek = e => {
        setState(() => ({ currentTime: e.currentTarget.value }))
        console.log(e.currentTarget.value)
    }

    const playTrack = () => currentTrack.play();

    const pauseTrack = () => currentTrack.pause();


    return track ? (
        <div className="music-player-bar-container">
            <div className="current-track-details">
                <h3>Now playing: <Link className="current-track-title" to={`/tracks/${track.id}`}>{track.title}</Link></h3>
                <p>Uploaded by: <Link className="current-track-uploader" to={`/users/${track.uploader.id}`}>{track.uploader.username}</Link></p>
            </div>

            <div className="music-player-container">
                <audio
                    onLoadedMetadata={(e) => setState({ duration: e.target.duration })}
                    controls
                    autoPlay
                    controlsList="nodownload"
                    className="music-player"
                    id="current-song"
                    src={track.trackFile} >
                </audio>

                <button onClick={pauseTrack}>Pause</button>
                <button onClick={playTrack}>Play</button>

                <div>
                    //round duration up
                    <input type="range"
                        min="0"
                        max={state.duration}
                        onChange={handleSeek}
                    />
                </div>
            </div>

        </div>
    ) : null
}

export default MusicPlayer;