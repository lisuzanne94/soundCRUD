import React from "react";
import { Link } from "react-router-dom";
import TrackItem from "./track_item";

class DiscoverPage extends React.Component {

    componentDidMount () {
        this.props.fetchTracks();
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
                    <div className="genre-div">
                        <div className="indie-label">Indie</div>
                        <ul className="discover-track-list">
                            {
                                indie.map(track => (
                                    <div key={track.id}>
                                        <li className="discover-track-obj">
                                            <Link to={`/tracks/${track.id}`}>
                                                <img className="discover-track-cover-img" src={track.coverImage} />
                                            </Link>
                                            <Link to={`/tracks/${track.id}`} className="discover-track-titler">{track.title}</Link>
                                            <Link to={`/tracks/${track.id}`} className="discover-track-uploader">{track.uploader}</Link>
                                        </li>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="genre-div">
                        <div className="hiphoprap-label">Hip Hop & Rap</div>
                        <ul className="discover-track-list">
                            {
                                hiphop.map(track => (
                                    <div key={track.id}>
                                        <li className="discover-track-obj">
                                            <Link to={`/tracks/${track.id}`}>
                                                <img className="discover-track-cover-img" src={track.coverImage} />
                                            </Link>
                                            <Link to={`/tracks/${track.id}`} className="discover-track-titler">{track.title}</Link>
                                            <Link to={`/tracks/${track.id}`} className="discover-track-uploader">{track.uploader}</Link>
                                        </li>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="genre-div">
                        <div className="kpop-label">KPop</div>
                        <ul className="discover-track-list">
                            {
                                kpop.map(track => (
                                    <div key={track.id}>
                                        <li className="discover-track-obj">
                                            <Link to={`/tracks/${track.id}`}>
                                                <img className="discover-track-cover-img" src={track.coverImage} />
                                            </Link>
                                            <Link to={`/tracks/${track.id}`} className="discover-track-titler">{track.title}</Link>
                                            <Link to={`/tracks/${track.id}`} className="discover-track-uploader">{track.uploader}</Link>
                                        </li>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="genre-div">
                        <div className="pop-label">Pop</div>
                        <ul className="discover-track-list">
                            {
                                pop.map(track => (
                                    <div key={track.id}>
                                        <li className="discover-track-obj">
                                            <Link to={`/tracks/${track.id}`}>
                                                <img className="discover-track-cover-img" src={track.coverImage} />
                                            </Link>
                                            <Link to={`/tracks/${track.id}`} className="discover-track-titler">{track.title}</Link>
                                            <Link to={`/tracks/${track.id}`} className="discover-track-uploader">{track.uploader}</Link>
                                        </li>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>

                </div>

                <div className="uploaders-list-container">
                    <h2>Artists you should follow</h2>
                </div>
            </div>
        )
    }
};

export default DiscoverPage;