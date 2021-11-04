import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { fetchTracks } from "../../actions/track_actions";
import Splash from "./splash";

const mSTP = state => ({
    tracks: state.entities.tracks
});

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    fetchTracks: () => dispatch(fetchTracks())
});

export default connect(mSTP, mDTP)(Splash);
