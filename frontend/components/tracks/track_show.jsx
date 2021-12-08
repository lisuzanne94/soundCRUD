import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import CommentFormContainer from "../comments/comment_form_container";
import CommentItemContainer from "../comments/comment_item_container";
import PlayButton from "../play_button/play_button_container";
import Modal from '../modal/modal';

class TrackShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...this.props.track
        }
    }

    componentDidMount() {
        this.props.fetchTrack(this.props.match.params.trackId)
    };

    render() {

        if (!this.props.track) { return null }

        const editButton = this.props.currentUserId === this.props.track.uploader.id ? (
            <button
                className="modify-track-btn"
                onClick={() => this.props.openModal('Update Track')}>
                <FontAwesomeIcon icon={faPencilAlt} /> Edit Track
            </button>
        ) : null

        const deleteButton = this.props.currentUserId === this.props.track.uploader.id ? (
            <button
                className="modify-track-btn"
                onClick={() => this.props.deleteTrack(this.props.track.id).then(() => this.props.history.push('/discover'))}>
                <FontAwesomeIcon icon={faTrashAlt} /> Delete Track
            </button>
        ) : null

        // let togglePlay;
        // if (this.props.currentTrack && this.props.currentTrack.id === this.props.trackId) {
        //     if (!document.getElementById("current-song").paused) {
        //         togglePlay = (<div className="track-play-btn">
        //             <FontAwesomeIcon icon={faPause} onClick={() => document.getElementById("current-song").pause()} />
        //         </div>)
        //     } else {
        //         togglePlay = (<div className="track-play-btn">
        //             <FontAwesomeIcon icon={faPlay} onClick={() => document.getElementById("current-song").play()} />
        //         </div>)
        //     }
        // }

        // const togglePlay = (this.props.currentTrack && this.props.currentTrack.id === this.props.trackId && !document.getElementById("current-song").paused) ? 
            // (<div className="track-play-btn">
            //     <FontAwesomeIcon icon={faPause} onClick={() => document.getElementById("current-song").pause()} />
            // </div>) :
            // (<div className="track-play-btn">
            //     <FontAwesomeIcon icon={faPlay} onClick={() => this.props.receivePlayTrack(this.props.track)} />
            // </div>)

            // const togglePlay = () => {
            //     if (!this.props.currentTrack && this.props.currentTrack.id === this.props.trackId) {
            //         if (!document.getElementById("current-song").paused) {
            //             return (<div className="track-play-btn">
            //                 <FontAwesomeIcon icon={faPause} onClick={() => this.props.receivePlayTrack(this.props.track)} />
            //             </div>)
            //         } else {
            //             (<div className="track-play-btn">
            //                 <FontAwesomeIcon icon={faPlay} onClick={() => document.getElementById("current-song").pause()} />
            //             </div>)
            //         }
            //     }
            // }

        const togglePlay = () => {
            if (!this.props.currentTrack || this.props.currentTrack.id !== this.props.trackId) {
                return (<div className="track-play-btn">
                    <FontAwesomeIcon icon={faPlay} onClick={() => this.props.receivePlayTrack(this.props.track)} />
                </div>) }
            if (this.props.currentTrack.id === this.props.trackId && !document.getElementById("current-song").paused) {
                    return (<div className="track-play-btn">
                        <FontAwesomeIcon icon={faPause} onClick={() => document.getElementById("current-song").pause()} />
                    </div>)
                } else {
                    (<div className="track-play-btn">
                        <FontAwesomeIcon icon={faPlay} onClick={() => document.getElementById("current-song").play()} />
                    </div>)
                }
            }

        return (
            <div className="track-show-page-container">
                <div className="track-banner">
                    <div className="track-banner-left">
                        {/* <div className="track-play-btn">
                            <FontAwesomeIcon icon={faPlay} onClick={() => this.props.receivePlayTrack(this.props.track)} />
                        </div> */}
                        {/* {togglePlay()} */}
                        <PlayButton trackId={this.props.trackId} track={this.props.track} />

                        <div className="track-banner-labels">
                            <h2 className="track-banner-title">{this.props.track.title}</h2>
                            <h3><Link className="track-banner-uploader" to={`/users/${this.props.track.uploader.id}`}>{this.props.track.uploader.username}</Link></h3>
                        </div>
                    </div>

                    <div className="track-banner-right">
                        <div className="track-banner-right-labels">
                            <h3 className="time-ago">{this.props.track.createdTime.includes("about") ? this.props.track.createdTime.slice(6) : this.props.track.createdTime} ago</h3>
                            <h3 className="track-show-genre">#{this.props.track.genre}</h3>
                        </div>
                        <img className="track-show-cover-img" src={this.props.track.coverImage} />
                    </div>
                </div>

                <div className="track-show-page-under-banner">
                    <div>
                        <CommentFormContainer
                            commentTrackId={this.props.trackId}
                        />
                    </div>


                    <div className="modify-track-btns">
                        {editButton}
                        {deleteButton}
                    </div>


                    <div className="under-comment-form">
                        <div className="uploader-details">
                            <img className="uploader-details-pic" src={this.props.track.uploader.profilePic} />
                            <div className="uploader-details-label">{this.props.track.uploader.username}</div>
                        </div>

                        <CommentItemContainer
                            currentUser={this.props.currentUser}
                        />

                    </div>
                    
                    <Modal modalTrackId={this.props.trackId} />
                </div>
            </div>
        )
    }
};

export default TrackShow;