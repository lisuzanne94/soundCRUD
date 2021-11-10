import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faMusic } from '@fortawesome/free-solid-svg-icons'
import TrackItem from "./track_item";

class DiscoverPage extends React.Component {

    componentDidMount () {
        this.props.fetchTracks();
        this.props.clearCommentsFromState();
        this.props.fetchUsers();
    }

    // gets a random user id between 1 inclusive and max exclusive where max is the length of users array


    render () {
        if (!this.props.tracks) { return null }
        if (!this.props.randomUsers) { return null }

        const { currentUser, tracks, randomUsers } = this.props;

        // const randomUserIds = this.getRandomUserIds(12);
        // const testDiv = users[12] ? (randomUserIds.map(userId =>
        //     <li key={userId}>
        //         <div><img className="discover-uploaders-pic" src={users[userId].profilePic} /></div>
        //         <div>{users[userId].username}</div>
        //         <div>{users[userId].tracks.length} tracks uploaded</div>
        //     </li>
        // )) : null

        console.log(randomUsers)

        const hiphop = [];
        const kpop = [];
        const pop = [];
        const anime = [];

        tracks.forEach(track => {
            if (track.genre === 'hip-hop-rap') {
                hiphop.push(track)
            } else if (track.genre === 'kpop') {
                kpop.push(track)
            } else if (track.genre === 'pop') {
                pop.push(track)
            } else if (track.genre === 'anime') {
                anime.push(track)
            }
        })

        return (
            <div className="discover-page-container">
                <div className="discover-tracks-container">
                    <div className="tracks-list">
                        <div className="list-header">Get transported</div>
                        <div className="list-subheader">Suggestions made from your favorite anime</div>
                        <ul className="track-obj-list">
                            {
                                anime.map(track => (
                                    <div key={track.id}>
                                        <li className="discover-track-obj">
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
                        <div className="list-header">In the mood for Hip Hop or Rap?</div>
                        <div className="list-subheader"></div>
                        <ul className="track-obj-list">
                            {
                                hiphop.map(track => (
                                    <div key={track.id}>
                                        <li className="discover-track-obj">
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
                        <div className="list-header">KPop</div>
                        <div className="list-subheader">Tracks as smooth as butter</div>
                        <ul className="track-obj-list">
                            {
                                kpop.map(track => (
                                    <div key={track.id}>
                                        <li className="discover-track-obj">
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
                        <div className="list-subheader">Come on and slam</div>
                        <ul className="track-obj-list">
                            {
                                pop.map(track => (
                                    <div key={track.id}>
                                        <li className="discover-track-obj">
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
                        <ul>
                            {/* {users.map(user => 
                                <li key={user.id}>
                                    <div><img src={user.profilePic} /></div>
                                    <div>{user.username}</div>
                                    <div>{user.tracks.length} tracks uploaded</div>
                                </li>
                                )} */}
                            { randomUsers.map(user => 
                                    <li key={user.id}>
                                        <div className="discover-uploaders-obj">
                                            <img className="discover-uploaders-pic" src={user.profilePic} />
                                            <div className="discover-uploaders-labels">
                                            <div className="discover-uploader-username">{user.username}</div>
                                                {
                                                    user.tracks.length === 1 ? (
                                                        <div className="num-tracks">
                                                        <FontAwesomeIcon icon={faMusic} />&#160;<p>{user.tracks.length}</p>&#160;track uploaded
                                                        </div>
                                                    ) : (
                                                        <div className="num-tracks">
                                                            <FontAwesomeIcon icon={faMusic} />&#160;<p>{user.tracks.length}</p>&#160;tracks uploaded
                                                        </div>
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