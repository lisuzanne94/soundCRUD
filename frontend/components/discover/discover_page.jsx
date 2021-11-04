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
                <div>
                    <ul>
                        {
                            this.props.tracks.map(track => (
                                <li key={track.id}><TrackItem track={track}/></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
};

export default DiscoverPage;