import {
    RECEIVE_PLAY_TRACK
} from '../actions/player_actions';

const playerReducer = (state={ currentTrack: null, isPlaying: false }, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_PLAY_TRACK:
            nextState["currentTrack"] = action.track;
            return nextState;
        default:
            return state;
    }
};

export default playerReducer;