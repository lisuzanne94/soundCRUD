import { connect } from "react-redux";
import PlayButton from "./play_button";
import { receivePlayTrack, playTrack, pauseTrack } from "../../actions/player_actions";

const mSTP = (state) => ({
    currentTrack: state.ui.player.currentTrack,
    isPlaying: state.ui.player.isPlaying
});

const mDTP = dispatch => ({
    receivePlayTrack: track => dispatch(receivePlayTrack(track)),
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack())
});

export default connect(mSTP, mDTP)(PlayButton);