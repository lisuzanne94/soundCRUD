import React from "react";
import Modal from '../modal/modal';

class UserShow extends React.Component {

    componentDidMount () {
        this.props.fetchUser(this.props.match.params.userId)
        this.props.fetchUserTracks(this.props.match.params.userId);
    }

    render () {

        if (!this.props.user) { return null }
        if (!this.props.tracks) { return null }

        const { user, userId, openModal } = this.props;
        const userTracks = Object.values(user.tracks)

        return (
            <div>
                {user.username}

            <button onClick={() => openModal('Edit User')}>Update Profile Pic</button>
            
            <Modal userId={userId} />

                <img className="user-profile-pic" src={user.profilePic} />
                <div>
                    <ul>
                        {
                            tracks.map((track, i) => (
                                <li key={i}>
                                    <div className="user-track-obj-container">
                                        <img className="user-track-cover-img" src={track.coverImage} />

                                        <div className="user-track-player">
                                            <div className="user-track-play-btn"><FontAwesomeIcon icon={faPlayCircle} /></div>
                                            <div className="user-track-labels">
                                                <div className="user-track-uploader">{track.uploader.username}</div>
                                                <div className="user-track-title">{track.title}</div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
};

export default UserShow;