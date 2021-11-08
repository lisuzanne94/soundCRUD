import { connect } from "react-redux";
import UserShow from "./user_show";
import { fetchUser, updateUser } from "../../actions/user_actions";
import { fetchUserTracks } from "../../actions/track_actions";

const mSTP = (state, ownProps) => ({
    tracks: Object.values(state.entities.tracks),
    user: state.entities.users[ownProps.match.params.userId]
});

const mDTP = dispatch => ({
    fetchUserTracks: userId => dispatch(fetchUserTracks(userId)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    updateUser: user => dispatch(updateUser(user))
});

export default connect(mSTP, mDTP)(UserShow);