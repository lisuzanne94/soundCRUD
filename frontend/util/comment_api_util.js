// export const fetchComment = commentId => (
//     $.ajax({
//         method: 'GET',
//         url: `/api/comments/${commentId}`,
//         contentType: false,
//         processData: false
//     })
// );

export const createComment = comment => (
    $.ajax({
        method: 'POST',
        url: '/api/comments',
        data: comment,
        contentType: false,
        processData: false
    })
);

export const deleteComment = commentId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/comments/${commentId}`
    })
);