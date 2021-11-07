import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import CommentFormContainer from "../comments/comment_form_container";
import CommentItemContainer from "../comments/comment_item_container";
import Modal from '../modal/modal';

class TrackShow extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            ...this.props.track
        }
    }

    componentDidMount () {
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
            <div className="track-show-page-container">
                <div className="track-banner">
                    <div className="track-banner-left">
                        <div className="track-play-btn"><FontAwesomeIcon icon={faPlayCircle} /></div>
                        <div className="track-banner-labels">
                            <h2 className="track-banner-title">{this.props.track.title}</h2>
                            <h3 className="track-banner-uploader">{this.props.track.uploader}</h3>
                        </div>
                    </div>
                    
                    <img className="track-show-cover-img" src={this.props.track.coverImage} />
                </div>

                <div className="track-show-page-under-banner">
                    <div>
                        <CommentFormContainer 
                            commentTrackId={this.props.trackId}
                        />
                    </div>

                    <Modal modalTrackId={this.props.trackId} />

                    <div className="modify-track-btns">
                        {editButton}
                        {deleteButton}
                    </div>

                    <div>
                        <ul>
                            <CommentItemContainer 
                                currentUserId={this.props.currentUserId}
                            />
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
};

export default TrackShow;