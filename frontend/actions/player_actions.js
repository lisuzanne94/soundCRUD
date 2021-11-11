export const RECEIVE_PLAY_TRACK = 'RECEIVE_PLAY_TRACK';
export const CLEAR_PLAY_TRACK = 'CLEAR_PLAY_TRACK';

export const receivePlayTrack = track => ({
    type: RECEIVE_PLAY_TRACK,
    track
});

export const clearPlayTrack = () => ({
    type: CLEAR_PLAY_TRACK
});