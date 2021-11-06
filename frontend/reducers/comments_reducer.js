import { RECEIVE_TRACK } from '../actions/track_actions';
import {
    RECEIVE_COMMENT,
    REMOVE_COMMENT
} from '../actions/comment_actions';

const commentsReducer = (state={}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_TRACK:
            return action.track.comments
        case RECEIVE_COMMENT:
            nextState[action.comment.id] = action.comment
            return nextState;
        case REMOVE_COMMENT:
            delete nextState[action.commentId]
            return nextState;
        default:
            return state;
    }
};

export default commentsReducer;