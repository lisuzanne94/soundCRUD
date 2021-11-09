import React from "react";
import Modal from '../modal/modal';

class UserShow extends React.Component {

    componentDidMount () {
        this.props.fetchUser(this.props.match.params.userId)
    }

    render () {

        if (!this.props.user) { return null }

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
                            userTracks.map((track, i) => (
                                <li key={i}>
                                    {track.title}
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