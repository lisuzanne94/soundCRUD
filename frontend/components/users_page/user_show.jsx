import React from "react";

class UserShow extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            ...this.props.user,
            profilePic: null
        }

        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount () {
        this.props.fetchUser(this.props.match.params.userId)
    }

    handleFile(e) {
        this.setState({ profilePic: e.currentTarget.files[0] });
    }

    handleSubmit (e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[id]', this.state.id);
        formData.append('user[profile_pic]', this.state.profilePic);

        this.props.updateUser(formData);
    }

    render () {

        if (!this.props.user) { return null }

        const { user } = this.props;
        const userTracks = Object.values(user.tracks)

        return (
            <div>
                {user.username}

                <form onSubmit={this.handleSubmit}>
                    <input type="file" 
                        onChange={this.handleFile}
                    />
                    <button>Submit</button>
                </form>

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