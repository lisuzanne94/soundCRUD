import React from "react";
import { Link } from "react-router-dom";
import CommentFormContainer from "../comments/comment_form_container";
import CommentItemContainer from "../comments/comment_item_container";
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
        const editButton = this.props.currentUserId === (1 || this.props.track.uploader_id)? (
            <button onClick={() => this.props.openModal('Update Track')}>Update Track</button>
        ) : null

        const deleteButton = this.props.currentUserId === (1 || this.props.track.uploader_id) ? (
            <button onClick={() => this.props.deleteTrack(this.props.track.id).then(() => this.props.history.push('/discover'))}>Delete Track</button>
        ) : null

        return (
            <div className="track-show-container">
                <div>
                    <img className="show-track-cover-img" src={this.props.track.coverImage} />

                    <h2>{this.props.track.title}</h2>

                    <p>Uploaded by: {this.props.track.uploader}</p>

                    <Modal modalTrackId={this.props.trackId} />

                    {editButton}
                    {deleteButton}

                    <div>
                        <CommentFormContainer commentTrackId={this.props.trackId}/>
                    </div>

                    <div>
                        <ul>
                            <CommentItemContainer />
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
};

export default TrackShow;