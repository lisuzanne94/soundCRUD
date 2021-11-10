export const RECEIVE_PLAY_TRACK = 'RECEIVE_PLAY_TRACK';
export const RECEIVE_PLAY = 'RECEIVE_PLAY';
export const PAUSE_PLAY = 'PAUSE_PLAY';

export const receivePlayTrack = track => ({
    type: RECEIVE_PLAY_TRACK,
    track
});