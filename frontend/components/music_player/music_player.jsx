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
    const [time, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isSeeking, setSeeking] = useState(false);

    const currentTrack = document.getElementById("current-song");
    // currentTrack ? currentTrack.ontimeupdate = () => console.log(currentTrack.currentTime) : null

    useEffect(() => {
        receivePlayTrack(track);

        return clearPlayTrack;
    }, [track]);

    const playTrack = () => currentTrack.play();

    const pauseTrack = () => currentTrack.pause();

    const updateProgressBar = () => {
        const progressBar = document.getElementById("progress-bar");
        progressBar.value = Math.floor(currentTrack.currentTime);
    }

    return track ? (
        <div className="music-player-bar-container">
            <div className="current-track-details">
                <h3>Now playing: <Link className="current-track-title" to={`/tracks/${track.id}`}>{track.title}</Link></h3>
                <p>Uploaded by: <Link className="current-track-uploader" to={`/users/${track.uploader.id}`}>{track.uploader.username}</Link></p>
            </div>

            <div className="music-player-container">
                <audio
                    // onLoadStart={setDuration}
                    // onLoadedMetadata={setDuration}
                    onLoadedData={() => {
                        setDuration(currentTrack.duration);
                        setCurrentTime(currentTrack.currentTime)
                    }}
                    onTimeUpdate={updateProgressBar}
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
                        id="progress-bar"
                        min="0"
                        max={duration}
                        value={20}
                        onInput={e => {
                            setCurrentTime(e.target.value)
                            // setCurrentTime(10)
                            currentTrack.currentTime = e.target.value
                            // console.log(time)
                            // console.log(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <div>
                        {time}
                    </div>
                </div>
            </div>

        </div>
    ) : null
}

export default MusicPlayer;