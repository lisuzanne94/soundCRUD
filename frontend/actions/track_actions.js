import * as TrackAPIUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const REMOVE_TRACK = 'REMOVE_TRACK';

export const RECEIVE_TRACK_ERRORS = 'RECEIVE_TRACK_ERRORS';
export const CLEAR_TRACK_ERRORS = 'CLEAR_TRACK_ERRORS';

const receiveAllTracks = tracks => ({
    type: RECEIVE_TRACKS,
    tracks
});

const receiveTrack = track => ({
    type: RECEIVE_TRACK,
    track
});

const removeTrack = trackId => ({
    type: REMOVE_TRACK,
    trackId
});

const receiveTrackErrors = errors => ({
    type: RECEIVE_TRACK_ERRORS,
    errors
});

const clearTrackErrors = () => ({
    type: CLEAR_TRACK_ERRORS
});

//Thunk action creators

export const fetchTracks = () => dispatch => (
    TrackAPIUtil.fetchTracks().then(tracks => dispatch(receiveAllTracks(tracks)))
);

export const fetchTrack = trackId => dispatch => {
    return TrackAPIUtil.fetchTrack(trackId).then(track => dispatch(receiveTrack(track)))
};

export const createTrack = track => dispatch => (
    TrackAPIUtil.createTrack(track).then(track => dispatch(receiveTrack(track)))
<<<<<<< HEAD

=======
>>>>>>> user-auth-fixes
);

export const updateTrack = track => dispatch => (
    TrackAPIUtil.updateTrack(track).then(track => dispatch(receiveTrack(track)))
);

export const deleteTrack = trackId => dispatch => (
    TrackAPIUtil.deleteTrack(trackId).then(() => dispatch(removeTrack(trackId)))
);