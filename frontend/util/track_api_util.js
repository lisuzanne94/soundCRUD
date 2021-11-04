export const fetchTracks = () => (
    $.ajax({
        method: 'GET',
        url: '/api/tracks'
    })
);

export const fetchTrack = trackId => {
    return (
    $.ajax({
        method: 'GET',
        url: `api/tracks/${trackId}`,
        contentType: false,
        processData: false
    })
    )
};

// export const fetchTrack = trackId => (
//     $.ajax({
//         method: 'GET',
//         url: `api/tracks/${trackId}`,
//         contentType: false,
//         processData: false
//     })
// );

export const createTrack = track => (
    $.ajax({
        method: 'POST',
        url: '/api/tracks',
        data: track,
        contentType: false,
        processData: false
    })
);

export const updateTrack = track => (
    $.ajax({
        method: 'PATCH',
        url: `/api/tracks/${track.get(['track[id]'])}`,
        data: track,
        contentType: false,
        processData: false
    })
);

export const deleteTrack = trackId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/tracks/${trackId}`
    })
);

