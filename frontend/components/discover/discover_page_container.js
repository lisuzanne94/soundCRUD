import { connect } from "react-redux";
import { fetchTracks } from "../../actions/track_actions";
import { logout } from "../../actions/session_actions";
import DiscoverPage from "./discover_page";

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    tracks: Object.values(state.entities.tracks)
});

const mDTP = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks()),
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(DiscoverPage)