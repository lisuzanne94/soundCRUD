import React from "react";
import { Link } from "react-router-dom";

const TrackItem = props => (
    <figure>
        <Link to={`/tracks/${props.track.id}`}>{props.track.title}</Link>
    </figure>
);

export default TrackItem;