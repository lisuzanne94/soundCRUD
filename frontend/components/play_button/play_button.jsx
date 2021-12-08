import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const PlayButton = ({ currentTrack, trackId, track, receivePlayTrack, playTrack, pauseTrack, isPlaying }) => {
    const currentPlayingTrack = document.getElementById("current-song");

    let button;
    if (!currentTrack) {
        button = (<div className="track-play-btn">
            <FontAwesomeIcon icon={faPlay} onClick={() => {
                receivePlayTrack(track);
                }} />
        </div>)
    } else if (currentTrack.id === parseInt(trackId) && !isPlaying) {
        button = (<div className="track-play-btn">
            <FontAwesomeIcon icon={faPlay} onClick={() => {
                currentPlayingTrack.play();
                playTrack();
            }} />
        </div>)
    } else if (currentTrack.id === parseInt(trackId) && isPlaying) {
        button = (<div className="track-pause-btn">
            <FontAwesomeIcon icon={faPause} onClick={() => {
                currentPlayingTrack.pause();
                pauseTrack();
            }} />
        </div>)
    } else if (currentTrack && currentTrack.id !== trackId) {
        button = (<div className="track-play-btn">
            <FontAwesomeIcon icon={faPlay} onClick={() => {
                receivePlayTrack(track);
            }} />
        </div>)
    }

    const togglePlay = () => {
        if (currentTrack && currentTrack.id === trackId && !isPlaying) {
            button = (<div className="track-play-btn">
                <FontAwesomeIcon icon={faPlay} onClick={() => {
                    currentPlayingTrack.play();
                    playTrack();
                    }} />
            </div>)
        } else if (currentTrack && currentTrack.id === trackId && isPlaying) {
            button = (<div className="track-pause-btn">
                <FontAwesomeIcon icon={faPause} onClick={() => {
                    currentPlayingTrack.pause();
                    pauseTrack();
                    }} />
            </div>)
        } else if (currentTrack && currentTrack.id !== trackId) {
            button = (<div className="track-play-btn">
                <FontAwesomeIcon icon={faPlay} onClick={() => {
                    receivePlayTrack(track);
                }} />
            </div>)
        }
    }

    useEffect(() => {
        togglePlay();
    }, [isPlaying])

    return (
        <div>
            {button}
        </div>
    )
}

export default PlayButton;