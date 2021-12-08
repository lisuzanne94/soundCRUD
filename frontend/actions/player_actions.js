export const RECEIVE_PLAY_TRACK = 'RECEIVE_PLAY_TRACK';
export const CLEAR_PLAY_TRACK = 'CLEAR_PLAY_TRACK';
export const PLAY_TRACK = 'PLAY_TRACK';
export const PAUSE_TRACK= 'PAUSE_TRACK';

export const receivePlayTrack = track => ({
    type: RECEIVE_PLAY_TRACK,
    track
});

export const playTrack = () => ({
    type: PLAY_TRACK
});

export const pauseTrack = () => ({
    type: PAUSE_TRACK
})

export const clearPlayTrack = () => ({
    type: CLEAR_PLAY_TRACK
});