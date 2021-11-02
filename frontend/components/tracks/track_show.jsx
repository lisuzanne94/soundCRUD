import React from "react";

class TrackShow extends React.Component {

    componentDidMount () {
        this.props.fetchTrack(this.props.match.params.trackId)
    };

    render () {

        return (
            <div>
                <h2>{this.props.track.title}</h2>
                <p>Uploaded by: {this.props.track.uploader.username}</p>
            </div>
        )
    }
};

export default TrackShow;