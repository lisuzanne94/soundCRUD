import { RECEIVE_TRACK_ERRORS, CLEAR_TRACK_ERRORS } from "../actions/track_actions";

const trackErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_TRACK_ERRORS:
            return action.errors;
        case CLEAR_TRACK_ERRORS:
            return [];
        default:
            return state;
    }
};

export default trackErrorsReducer;