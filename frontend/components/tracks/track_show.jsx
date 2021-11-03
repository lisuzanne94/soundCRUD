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
                <img src={this.props.track.coverImage} />
                
                <h2>{this.props.track.title}</h2>

                <p>Uploaded by: {this.props.track.uploader.username}</p>

                <Link to={`/tracks/${this.props.track.id}/edit`}>Edit Track</Link>

                <br />

                <button onClick={() => this.props.deleteTrack(this.props.track.id).then(() => this.props.history.push('/discover'))}>Delete Track</button>
            </div>
        ) : null

        return (
            trackDetails
        )
    }
};

export default TrackShow;