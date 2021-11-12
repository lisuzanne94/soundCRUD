import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faPlay } from '@fortawesome/free-solid-svg-icons'
import TrackItem from "./track_item";

class DiscoverPage extends React.Component {

    componentDidMount () {
        this.props.fetchTracks();
        this.props.clearCommentsFromState();
        this.props.fetchUsers();
    }

    render () {
        if (!this.props.tracks) { return null }

        const { currentUser, tracks, randomUsers } = this.props;

        const hiphop = [];
        const animegames = [];
        const pop = [];
        const alternative = [];
        const electronic = [];


        tracks.forEach(track => {
            if (track.genre === 'hip-hop') {
                hiphop.push(track)
            } else if (track.genre === 'anime/games') {
                animegames.push(track)
            } else if (track.genre === 'pop') {
                pop.push(track)
            } else if (track.genre === 'alternative') {
                alternative.push(track)
            } else if (track.genre === 'electronic') {
                electronic.push(track)
            }
        })

        return (
            <div className="discover-page-container">
                <div className="discover-tracks-container">
                    <div className="tracks-list">
                        <div className="list-header">Dive back in</div>
                        <div className="list-subheader">Essential picks from your favorite anime & games</div>
                        <ul className="track-obj-list">
                            {
                                animegames.map(track => (
                                    <div key={track.id}>
                                        <li className="discover-track-obj">
                                            <Link to={`/tracks/${track.id}`}>
                                                <img className="discover-track-cover-img" src={track.coverImage} />
                                            </Link>
                                            <div className="discover-play-btn">
                                                <FontAwesomeIcon icon={faPlay} onClick={() => this.props.receivePlayTrack(track)} />
                                            </div>
                                            <Link to={`/tracks/${track.id}`} className="discover-track-title">{track.title}</Link>
                                            <Link to={`/users/${track.uploader.id}`} className="discover-track-uploader">{track.uploader.username}</Link>
                                        </li>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="tracks-list">
                        <div className="list-header">In the mood for some hip hop?</div>
                        <div className="list-subheader"></div>
                        <ul className="track-obj-list">
                            {
                                hiphop.map(track => (
                                    <div key={track.id}>
                                        <li className="discover-track-obj">
                                            <div className="discover-play-btn"><FontAwesomeIcon icon={faPlay} onClick={() => this.props.receivePlayTrack(track)} /></div>
                                            <Link to={`/tracks/${track.id}`}>
                                                <img className="discover-track-cover-img" src={track.coverImage} />
                                            </Link>
                                            <Link to={`/tracks/${track.id}`} className="discover-track-title">{track.title}</Link>
                                            <Link to={`/users/${track.uploader.id}`} className="discover-track-uploader">{track.uploader.username}</Link>
                                        </li>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="tracks-list">
                        <div className="list-header">Alternative</div>
                        <div className="list-subheader">There are no alternatives to these indie hits</div>
                        <ul className="track-obj-list">
                            {
                                alternative.map(track => (
                                    <div key={track.id}>
                                        <li className="discover-track-obj">
                                            <div className="discover-play-btn"><FontAwesomeIcon icon={faPlay} onClick={() => this.props.receivePlayTrack(track)} /></div>
                                            <Link to={`/tracks/${track.id}`}>
                                                <img className="discover-track-cover-img" src={track.coverImage} />
                                            </Link>
                                            <Link to={`/tracks/${track.id}`} className="discover-track-title">{track.title}</Link>
                                            <Link to={`/users/${track.uploader.id}`} className="discover-track-uploader">{track.uploader.username}</Link>
                                        </li>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="tracks-list">
                        <div className="list-header">Pop</div>
                        <div className="list-subheader">Tracks that are POPPIN right now</div>
                        <ul className="track-obj-list">
                            {
                                pop.map(track => (
                                    <div key={track.id}>
                                        <li className="discover-track-obj">
                                            <div className="discover-play-btn"><FontAwesomeIcon icon={faPlay} onClick={() => this.props.receivePlayTrack(track)} /></div>
                                            <Link to={`/tracks/${track.id}`}>
                                                <img className="discover-track-cover-img" src={track.coverImage} />
                                            </Link>
                                            <Link to={`/tracks/${track.id}`} className="discover-track-title">{track.title}</Link>
                                            <Link to={`/users/${track.uploader.id}`} className="discover-track-uploader">{track.uploader.username}</Link>
                                        </li>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="tracks-list">
                        <div className="list-header">Electronic</div>
                        <div className="list-subheader">🎧 🎛️ 🎚️</div>
                        <ul className="track-obj-list">
                            {
                                electronic.map(track => (
                                    <div key={track.id}>
                                        <li className="discover-track-obj">
                                            <div className="discover-play-btn">
                                                <FontAwesomeIcon icon={faPlay} onClick={() => this.props.receivePlayTrack(track)} />
                                            </div>
                                            <Link to={`/tracks/${track.id}`}>
                                                <img className="discover-track-cover-img" src={track.coverImage} />
                                            </Link>
                                            <Link to={`/tracks/${track.id}`} className="discover-track-title">{track.title}</Link>
                                            <Link to={`/users/${track.uploader.id}`} className="discover-track-uploader">{track.uploader.username}</Link>
                                        </li>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className="discover-uploaders-container">
                    <h2 className="discover-uploaders-list-header"><FontAwesomeIcon icon={faUserFriends} /> Content uploaders you should check out</h2>
                    <div>
                        <ul className="discover-uploaders-list">
                            { randomUsers.map(user => 
                                    <li key={user.id}>
        
                                            <div className="discover-uploaders-obj">
                                                <Link className="discover-link" to={`/users/${user.id}`}><img className="discover-uploaders-pic" src={user.profilePic} /></Link>
                                                <div className="discover-uploaders-labels">
                                                    <div className="discover-uploader-username"><Link className="discover-link" to={`/users/${user.id}`}>{user.username}</Link></div>
                                                            {
                                                            user.tracks.length === 1 ? (
                                                        <Link className="discover-link" to={`/users/${user.id}`}>
                                                                    <div className="num-tracks">
                                                                        <FontAwesomeIcon className="discover-numtracks-icon" icon={faPlay} />&#160;<p>{user.tracks.length}</p>&#160;track uploaded
                                                                    </div>
                                                                </Link>
                                                            ) : (
                                                        <Link className="discover-link" to={`/users/${user.id}`}>
                                                                    <div className="num-tracks">
                                                                        <FontAwesomeIcon className="discover-numtracks-icon" icon={faPlay} />&#160;<p>{user.tracks.length}</p>&#160;tracks uploaded
                                                                    </div>
                                                                </Link>
                                                            )
                                                        }
                                                    </div>
                                            </div>
                                    </li>
                                ) }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
};

export default DiscoverPage;