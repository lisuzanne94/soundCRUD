import { connect } from "react-redux";
import TrackShow from './track_show';
import { fetchTrack, deleteTrack } from "../../actions/track_actions";
import { openModal } from "../../actions/modal_actions";
// import { receivePlayTrack } from "../../actions/player_actions";

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    currentUserId: state.session.id,
    currentUserProfilePic: state.entities.users[state.session.id].profilePic,
    track: state.entities.tracks[ownProps.match.params.trackId],
    trackId: ownProps.match.params.trackId,
    currentTrack: state.ui.player.currentTrack
});

const mDTP = dispatch => ({
    fetchTrack: trackId => dispatch(fetchTrack(trackId)),
    deleteTrack: trackId => dispatch(deleteTrack(trackId)),
    openModal: modal => dispatch(openModal(modal)),
    // receivePlayTrack: track => dispatch(receivePlayTrack(track))
});

export default connect(mSTP, mDTP)(TrackShow);
