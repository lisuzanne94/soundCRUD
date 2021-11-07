import React from "react";

class UserShow extends React.Component {

    componentDidMount () {
        this.props.fetchUser(this.props.match.params.userId)
    }

    render () {

        if (!this.props.user) { return null }

        const { user } = this.props;
        const userTracks = Object.values(user.tracks)

        return (
            <div>
                {user.username}
                <img src={user.profilePic} />
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