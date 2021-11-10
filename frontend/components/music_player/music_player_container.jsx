import { connect } from "react-redux";
import MusicPlayer from "./music_player";
import { receivePlayTrack, receivePlay, pausePlay } from "../../actions/player_actions";

const mSTP = state => ({
    track: state.ui.player.currentTrack
});

const mDTP = dispatch => ({
    receivePlayTrack: track => dispatch(receivePlayTrack(track)),
    receivePlay: () => dispatch(receivePlay()),
    pausePlay: () => dispatch(pausePlay())
});

export default connect(mSTP, mDTP)(MusicPlayer);