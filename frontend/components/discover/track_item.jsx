// import React from "react";
// import { Link, withRouter } from "react-router-dom";
// import TrackShowContainer from '../tracks/track_show_container';

// class TrackItem extends React.Component {

//     constructor(props) {
//         super(props);

//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         const trackId = this.props.track.id;
//         this.props.history.push(`/tracks/${trackId}`)
//     }


//     render () {

//         return (
//         <figure>
//             <Link to={`/tracks/${this.props.track.id}`} onClick={this.handleClick}>{this.props.track.title}</Link>
//         </figure>
//         )
//     }
// };

// export default withRouter(TrackItem);