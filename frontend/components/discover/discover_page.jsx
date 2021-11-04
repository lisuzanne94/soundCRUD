import React from "react";
import { Link } from "react-router-dom";
import TrackItem from "./track_item";

class DiscoverPage extends React.Component {

    componentDidMount () {
        this.props.fetchTracks();
    }

    render () {

        const { currentUser, tracks, fetchTracks, logout } = this.props;
        return (
            <div className="discover-page-container">
                <div className="discover-tracks-container">
                    <ul className="discover-track-list">
                        {
                            tracks.map(track => (
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
        )
    }
};

export default DiscoverPage;