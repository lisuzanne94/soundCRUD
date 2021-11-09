import React from "react";

class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="music-player-container">
                <audio className="music-player" src={this.props.trackFile} controls></audio>
            </div>
        )
    }
};

export default MusicPlayer;