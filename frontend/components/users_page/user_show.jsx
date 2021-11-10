import React from "react";
import Modal from '../modal/modal';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faCameraRetro } from '@fortawesome/free-solid-svg-icons'

class UserShow extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            ...this.props.user,
            ...this.props.tracks
        }
    }

    componentDidMount () {
        this.props.fetchUser(this.props.match.params.userId)
        this.props.fetchUserTracks(this.props.match.params.userId);
    }

    componentDidUpdate (prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.props.fetchUser(this.props.match.params.userId);
            this.props.fetchUserTracks(this.props.match.params.userId);
        }
    }

    render () {

        if (!this.props.user) { return null }
        if (!this.props.tracks) { return null }

        const { user, userId, tracks, openModal } = this.props;

        return (
            <div className="user-show-page-container">
                <div className="user-banner">
                    <div className="profile-pic-div">
                        <img className="user-profile-pic" src={user.profilePic} />
                        <button className="update-prof-pic-btn" onClick={() => openModal('Edit User')}>
                            <FontAwesomeIcon icon={faCameraRetro} /> Update Profile Pic
                        </button>
                    </div>
                    <div>
                        <h3 className="user-banner-username">{user.username}</h3>
                    </div>
                </div>
                <div className="user-tracks-index-container">
                    <ul>
                        {
                            tracks.map((track, i) => (
                                <li key={i}>
                                    <div className="user-track-obj-container">

                                        <Link to={`/tracks/${track.id}`}><img className="user-track-cover-img" src={track.coverImage} /></Link>

                                        <div className="user-track-player">
                                            <div className="user-track-play-btn"><FontAwesomeIcon icon={faPlayCircle} /></div>
                                            <div className="user-track-labels">
                                                <Link to={`/users/${track.uploader.id}`} className="user-track-uploader">{track.uploader.username}</Link>
                                                <Link to={`/tracks/${track.id}`} className="user-track-title">{track.title}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <Modal userId={userId} />
            </div>
        )
    }
};

export default UserShow;