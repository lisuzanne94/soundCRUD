import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import CommentFormContainer from "../comments/comment_form_container";
import CommentItemContainer from "../comments/comment_item_container";
import Modal from '../modal/modal';
import MusicPlayer from "../music_player/music_player";

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

    // formatDate(createdDate) {
    //     if(this.props.track.created_at) {

    //         const currentTime = new Date();

    //         let years = currentTime.getFullYear() - createdDate.slice(0, 4);
    //         let months = (currentTime.getMonth() + 1) - createdDate.slice(5, 7);
    //         let days = currentTime.getDate() - createdDate.slice(8, 10);
    //         let hours = currentTime.getHours() - createdDate.slice(11, 13);
    //         let minutes = currentTime.getMinutes() - createdDate.slice(14, 16);
    //         let seconds = currentTime.getSeconds() - createdDate.slice(17, 19);

    //         console.log(createdDate)
            
    //         console.log(`years: ${years}`)
    //         console.log(`created years: ${createdDate.slice(0, 4)}`)
    //         console.log(`current years: ${currentTime.getFullYear()}`)

    //         console.log(`months: ${months}`)
    //         console.log(`created months: ${(createdDate.slice(5, 7))}`)
    //         console.log(`current months: ${(currentTime.getMonth() + 1)}`)

    //         console.log(`days: ${days}`)
    //         console.log(`created days: ${createdDate.slice(8, 10)}`)
    //         console.log(`current days: ${currentTime.getDate()}`)

    //         console.log(`hours: ${hours}`)
    //         console.log(`created hours: ${createdDate.slice(11, 13)}`)
    //         console.log(`current hours: ${currentTime.getHours()}`)

    //         console.log(`minutes: ${minutes}`)
    //         console.log(`created minutes: ${createdDate.slice(14, 16)}`)
    //         console.log(`current minutes: ${currentTime.getMinutes()}`)

    //         console.log(`seconds: ${seconds}`)
    //         console.log(`created seconds: ${createdDate.slice(17, 19)}`)
    //         console.log(`current seconds: ${currentTime.getSeconds()}`)

    //         if (years === 0 && months > 0) {
    //             return months === 1 ? "1 month ago" : `${months} months ago`
    //         } else if (years > 0) {
    //             return years === 1 ? "1 year ago" : `${years} years ago`
    //         } else if (days > 0) {
    //             return days === 1 ? "1 day ago" : `${days} days ago`
    //         } else if (hours > 0) {
    //             return hours === 1 ? "1 hour ago" : `${hours} hours ago`
    //         } else if (minutes > 0) {
    //             return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`
    //         } else if (seconds > 0) {
    //             return seconds === 1 ? "1 second ago" : `${seconds} seconds ago`
    //         }
    //     }
    // }

    render() {

        if (!this.props.track) { return null }

        // console.log(this.props.track.created_at ? (new Date()).getSeconds() - this.props.track.created_at.slice(17, 19) : " ")
        // console.log(this.props.track.created_at ? this.props.track.created_at.slice(17,19) : " ")
        // console.log((new Date()).getSeconds())
        // console.log(this.props.track.created_at ? this.props.track.created_at : " ")


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

        return (
            <div className="track-show-page-container">
                <div className="track-banner">
                    <div className="track-banner-left">
                        <div className="track-play-btn">
                            <FontAwesomeIcon icon={faPlayCircle} onClick={() => this.props.receivePlayTrack(this.props.track)} />
                        </div>
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