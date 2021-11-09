import React from "react";

class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <audio src={this.props.track}></audio>
            </div>
        )
    }
};

export default MusicPlayer;