import { connect } from "react-redux";
import { fetchUser, updateUser } from "../../actions/user_actions";
import { fetchUserTracks } from "../../actions/track_actions";
import { openModal } from "../../actions/modal_actions";
import { receivePlayTrack } from "../../actions/player_actions";

import UserShow from "./user_show";

const mSTP = (state, ownProps) => ({
    currentUserId: state.session.id,
    user: state.entities.users[ownProps.match.params.userId],
    userId: ownProps.match.params.userId,
    tracks: Object.values(state.entities.tracks)
});

const mDTP = dispatch => ({
    fetchUserTracks: userId => dispatch(fetchUserTracks(userId)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    updateUser: user => dispatch(updateUser(user)),
    openModal: modal => dispatch(openModal(modal)),
    receivePlayTrack: track => dispatch(receivePlayTrack(track))
    
});

export default connect(mSTP, mDTP)(UserShow);