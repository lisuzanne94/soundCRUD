import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const PlayButton = ({ currentTrack, trackId, track, receivePlayTrack, isPlaying }) => {

    const currentPlayingTrack = document.getElementById("current-song");

    let button;
    if (!currentTrack) {
        button = (<div className="track-play-btn">
            <FontAwesomeIcon icon={faPlay} onClick={() => receivePlayTrack(track)} />
        </div>)
    } else if (currentTrack.id === trackId && currentPlayingTrack.paused) {
        button = (<div className="track-play-btn">
            <FontAwesomeIcon icon={faPlay} onClick={() => currentPlayingTrack.play()} />
        </div>)
    } else if (currentTrack.id === trackId && !currentPlayingTrack.paused) {
        button = (<div className="track-play-btn">
            <FontAwesomeIcon icon={faPause} onClick={() => currentPlayingTrack.pause()} />
        </div>)
    }

    return (
        <div>
            {button}
        </div>
    )
}

export default PlayButton;