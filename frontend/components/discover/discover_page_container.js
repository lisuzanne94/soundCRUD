import { connect } from "react-redux";
import { fetchTracks } from "../../actions/track_actions";
import { logout } from "../../actions/session_actions";
import { clearCommentsFromState } from "../../actions/comment_actions";
import DiscoverPage from "./discover_page";
import { fetchUsers } from "../../actions/user_actions";

function getRandomUserIds (length) {
        const ids = [];
        let max = Math.floor(length);
        while (ids.length <= 5) {
            let randomId = Math.floor(Math.random() * (max + 1));
            if (!ids.includes(randomId) && randomId !== 0) {
                ids.push(randomId)
            }
        }
        return ids;
    }

const randomIds = getRandomUserIds(12);

const mSTP = state => ({
        currentUser: state.entities.users[state.session.id],
        tracks: Object.values(state.entities.tracks),
        randomUsers: Object.values(Object.fromEntries(Object.entries(state.entities.users).filter(([k, v]) => randomIds.includes(v.id))))
});

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchTracks: () => dispatch(fetchTracks()),
    clearCommentsFromState: () => dispatch(clearCommentsFromState())
});

export default connect(mSTP, mDTP)(DiscoverPage)