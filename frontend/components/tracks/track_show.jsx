import React from "react";

class TrackShow extends React.Component {

    constructor (props) {
        // debugger
        super(props);
    }

    componentDidMount () {
        // debugger
        this.props.fetchTrack(this.props.match.params.trackId)
    };

    
    render () {

        const trackDetails = this.props.track ? (
            <div>
                <h2>{this.props.track.title}</h2>
                <p>Uploaded by: {this.props.track.uploader.username}</p>
            </div>
        ) : null

        return (
            trackDetails
        )
    }
};

export default TrackShow;