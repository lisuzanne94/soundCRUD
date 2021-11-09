import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

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
        this.props.fetchUserTracks(this.props.match.params.userId);
    }

    handleFile(e) {
        this.setState({ profilePic: e.currentTarget.files[0] })
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
        if (!this.props.tracks) { return null }

        const { user, tracks } = this.props;

        return (
            <div className="user-show-page-container">
                <div className="user-banner">
                    <div className="user-banner-left">
                        <img className="user-profile-pic" src={user.profilePic} />
                        <h3 className="user-banner-username">{user.username}</h3>

                        <form onSubmit={this.handleSubmit}>
                            <input type="file"
                                onChange={this.handleFile}
                            />
                            <button>Submit</button>
                        </form>
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
            </div>
        )
    }
};

export default UserShow;