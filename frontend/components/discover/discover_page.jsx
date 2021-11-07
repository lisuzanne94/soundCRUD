import React from "react";
import { Link } from "react-router-dom";
import TrackItem from "./track_item";

class DiscoverPage extends React.Component {

    componentDidMount () {
        this.props.fetchTracks();
        this.props.clearCommentsFromState();
    }

    render () {

        if (!this.props.tracks) { return null }

        const { currentUser, tracks, fetchTracks, logout } = this.props;

        const hiphop = [];
        const kpop = [];
        const pop = [];
        const indie = [];

        tracks.forEach(track => {
            if (track.genre === 'hip-hop-rap') {
                hiphop.push(track)
            } else if (track.genre === 'kpop') {
                kpop.push(track)
            } else if (track.genre === 'pop') {
                pop.push(track)
            } else if (track.genre === 'indie') {
                indie.push(track)
            }
        })

        return (
            <div className="discover-page-container">
                <div className="discover-tracks-container">
                    <div className="tracks-list">
                        <div className="list-header">More indie you might like</div>
                        <div className="list-subheader">Suggestions made for you</div>
                        <ul className="track-obj-list">
                            {
                                indie.map(track => (
                                    <div key={track.id}>
                                        <li className="discover-track-obj">
                                            <Link to={`/tracks/${track.id}`}>
                                                <img className="discover-track-cover-img" src={track.coverImage} />
                                            </Link>
                                            <Link to={`/tracks/${track.id}`} className="discover-track-title">{track.title}</Link>
                                            <Link to={`/users/${track.uploader_id}`} className="discover-track-uploader">{track.uploader}</Link>
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
                                            <Link to={`/users/${track.uploader_id}`} className="discover-track-uploader">{track.uploader}</Link>
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
                                            <Link to={`/users/${track.uploader_id}`} className="discover-track-uploader">{track.uploader}</Link>
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
                                            <Link to={`/users/${track.uploader_id}`} className="discover-track-uploader">{track.uploader}</Link>
                                        </li>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>

                </div>

                <div className="recent-listen-container">
                    <h2 className="recent-listen-list-header">Recently Listened</h2>
                </div>
            </div>
        )
    }
};

export default DiscoverPage;