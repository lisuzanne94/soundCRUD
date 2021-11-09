import { connect } from "react-redux";
import { fetchTracks } from "../../actions/track_actions";
import { logout } from "../../actions/session_actions";
import { clearCommentsFromState } from "../../actions/comment_actions";
import DiscoverPage from "./discover_page";
import { fetchUsers } from "../../actions/user_actions";

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    tracks: Object.values(state.entities.tracks)
});

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchTracks: () => dispatch(fetchTracks()),
    logout: () => dispatch(logout()),
    clearCommentsFromState: () => dispatch(clearCommentsFromState())
});

export default connect(mSTP, mDTP)(DiscoverPage)