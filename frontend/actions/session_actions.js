import * as SessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

// export const receiveSessionErrors = errors => ({
//     type: RECEIVE_SESSION_ERRORS,
//     errors
// });

//thunks

// export const login = user => dispatch => (
//     SessionUtil.login(user).then(user => dispatch(receiveCurrentUser(user)))
// );

export const login = user => dispatch => {
    return (
        SessionUtil.login(user).then(user => dispatch(receiveCurrentUser(user)),
            err => dispatch(receiveErrors(err.responseJSON)))
    )
};

export const logout = () => dispatch => (
    SessionUtil.logout().then(() => dispatch(logoutCurrentUser()))
);

export const signup = user => dispatch => (
    SessionUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)),
        err => dispatch(receiveErrors(err.responseJSON)))
);
