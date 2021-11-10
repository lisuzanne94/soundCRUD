import React from "react";

class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        this.props.receivePlayTrack(this.props.track)
    }

    render() {

        if (!this.props.track) { return null }

        return (
            <div className="music-player-container">
                <audio className="music-player" src={this.props.track.trackFile} controls autoPlay></audio>
            </div>
        )
    }
};

export default MusicPlayer;