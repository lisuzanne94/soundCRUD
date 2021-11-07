import React from "react";
import { Link } from "react-router-dom";
import Modal from '../modal/modal';

class TrackShow extends React.Component {

    constructor (props) {
        super(props);
    }

    componentDidMount () {
        this.props.fetchTrack(this.props.match.params.trackId)
    };

    
    render () {

        if (!this.props.track) { return null }


        // guests (always id: 1) will have the ability to edit/delete all tracks for now??
        const editButton = this.props.currentUserId === this.props.track.uploader_id ? (
            <button onClick={() => this.props.openModal('Update Track')}>Update Track</button>
        ) : null

        const deleteButton = this.props.currentUserId === this.props.track.uploader_id ? (
            <button onClick={() => this.props.deleteTrack(this.props.track.id).then(() => this.props.history.push('/discover'))}>Delete Track</button>
        ) : null

            console.log(this.props.track.genre)

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