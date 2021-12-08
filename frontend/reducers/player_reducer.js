import {
    CLEAR_PLAY_TRACK,
    RECEIVE_PLAY_TRACK,
    PLAY_TRACK,
    PAUSE_TRACK
} from '../actions/player_actions';

const playerReducer = (state={ currentTrack: null, isPlaying: false }, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_PLAY_TRACK:
            nextState["currentTrack"] = action.track;
            nextState["isPlaying"] = true;
            return nextState;
        case PLAY_TRACK:
            nextState["isPlaying"] = true;
            return nextState;
        case PAUSE_TRACK:
            nextState["isPlaying"] = false;
            return nextState;
        case CLEAR_PLAY_TRACK:
            return { currentTrack: null, isPlaying: false }
        default:
            return state;
    }
};

export default playerReducer;