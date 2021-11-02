import React from "react";
import { Link } from "react-router-dom";

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

                <Link to={`/tracks/${this.props.track.id}/edit`}>Edit Track</Link>

                <br />

                <Link to='/discover' onClick={() => this.props.deleteTrack(this.props.track.id)}>Delete Track</Link>
            </div>
        ) : null

        return (
            trackDetails
        )
    }
};

export default TrackShow;