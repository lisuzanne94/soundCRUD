import { connect } from "react-redux";
import MusicPlayer from "./music_player";
import { receivePlayTrack, clearPlayTrack, playTrack, pauseTrack } from "../../actions/player_actions";

const mSTP = state => ({
    track: state.ui.player.currentTrack
});

const mDTP = dispatch => ({
    receivePlayTrack: track => dispatch(receivePlayTrack(track)),
    clearPlayTrack: () => dispatch(clearPlayTrack()),
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack())
});

export default connect(mSTP, mDTP)(MusicPlayer);