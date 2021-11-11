import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USERS, RECEIVE_USER } from "../actions/user_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.currentUser.id] = action.currentUser
            return nextState;
            // return { [action.currentUser.id]: action.currentUser }
        case RECEIVE_USERS:
            return action.users;
        case RECEIVE_USER:
            nextState[action.user.id] = action.user
            return nextState;
            // return { [action.user.id]: action.user }
        case LOGOUT_CURRENT_USER:
            return {}
        default:
            return state;
    }
};

export default usersReducer;