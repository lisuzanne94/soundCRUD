import React from "react";
import { Link } from "react-router-dom";
import Modal from '../modal/modal';

class TrackShow extends React.Component {

    constructor (props) {
        // debugger
        super(props);
        // debugger
    }

    componentDidMount () {
        // debugger
        this.props.fetchTrack(this.props.match.params.trackId)
    };

    
    render () {

        if (!this.props.track) { return null }

        const editButton = this.props.currentUserId === this.props.track.uploader_id ? (
            <button onClick={() => this.props.openModal('Update Track')}>Update Track</button>
        ) : null

        const deleteButton = this.props.currentUserId === this.props.track.uploader_id ? (
            <button onClick={() => this.props.deleteTrack(this.props.track.id).then(() => this.props.history.push('/discover'))}>Delete Track</button>
        ) : null

        return (
            <div>
                <img className="show-track-cover-img" src={this.props.track.coverImage} />

                <h2>{this.props.track.title}</h2>

                <p>Uploaded by: {this.props.track.uploader}</p>

                <Modal modalTrackId={this.props.trackId} />

                {editButton}
                {deleteButton}
            </div>

        )
    }
};

export default TrackShow;