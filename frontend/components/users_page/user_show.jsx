import React from "react";
import Modal from '../modal/modal';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

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

        const { currentUserId, user, userId, tracks, openModal, receivePlayTrack } = this.props;

        const updateProfPicBtn = currentUserId === user.id ? (
            <button className="update-prof-pic-btn" onClick={() => openModal('Edit User')}>
                <FontAwesomeIcon icon={faCameraRetro} /> Update Profile Pic
            </button>
        ) : null

        const nothingHereMsg = tracks.length === 0 ? (
            <div className="nothing-here-msg">
                This user hasn't uploaded anything yet {`:(`}
            </div>
        ) : null

        return (
            <div className="user-show-page-container">
                <div className="user-banner">
                    <div className="profile-pic-div">
                        <img className="user-profile-pic" src={user.profilePic} />
                        {updateProfPicBtn}
                    </div>
                    <div>
                        <h3 className="user-banner-username">{user.username}</h3>
                    </div>
                </div>
                <div className="user-page-under-banner">
                    <div className="user-tracks-index-container">
                        {nothingHereMsg}
                        <ul className="user-track-objs">
                            {
                                tracks.map((track, i) => (
                                    <li key={i}>
                                        <div className="user-track-obj-container">

                                            <Link to={`/tracks/${track.id}`}><img className="user-track-cover-img" src={track.coverImage} /></Link>

                                            <div className="user-track-obj-top">
                                                 <div className="user-track-player">
                                                    <div className="user-track-play-btn">
                                                        <FontAwesomeIcon onClick={() => receivePlayTrack(track)} icon={faPlay} />
                                                    </div>
                                                    <div className="user-track-labels">
                                                        <Link to={`/users/${track.uploader.id}`} className="user-track-uploader">{track.uploader.username}</Link>
                                                        <Link to={`/tracks/${track.id}`} className="user-track-title">{track.title}</Link>
                                                    </div>
                                                </div>
                                            
                                                <div className="user-track-created-time">{track.createdTime} ago</div>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="user-show-line-separator"> </div>

                    <div className="self-plug-container">
                        <div className="self-plug-header">In case you missed it</div>
                        <div className="self-plug-btns">
                            <a className="self-plug-github" href="https://www.github.com/lisuzanne94" target="_blank">
                                <div><FontAwesomeIcon icon={faGithub} />&#160;&#160;Github</div>
                            </a>

                            <a className="self-plug-linkedin" href="https://www.linkedin.com/in/suzanne-li-080036161" target="_blank">
                                <div><FontAwesomeIcon icon={faLinkedinIn} />&#160;&#160;LinkedIn</div>
                            </a>
                        </div>
                    </div>
                </div>
                <Modal userId={userId} />
            </div>
        )
    }
};

export default UserShow;