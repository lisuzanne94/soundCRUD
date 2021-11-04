import React from "react";
import { Link } from "react-router-dom";
import TrackItem from "./track_item";

class DiscoverPage extends React.Component {

    componentDidMount () {
        this.props.fetchTracks();
    }

    render () {
        return (
            <div>
                <h2>THIS IS THE DISCOVER PAGE</h2>
                <br />
                <ul>
                    {
                        this.props.tracks.map(track => (
                            <li key={track.id}><TrackItem track={track}/></li>
                        ))
                    }
                </ul>
            </div>
        )
    }
};

export default DiscoverPage;