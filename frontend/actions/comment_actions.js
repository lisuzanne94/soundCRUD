import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const CLEAR_COMMENT_ERRORS = 'CLEAR_COMMENT_ERRORS';

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
});

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
});

const receiveCommentErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
});

export const clearCommentErrors = () => ({
    type: CLEAR_COMMENT_ERRORS
});


export const fetchComments = () => dispatch => (
    CommentAPIUtil.fetchComments().then(comments => dispatch(receiveComments(comments)))
);

export const fetchComment = commentId => dispatch => (
    CommentAPIUtil.fetchComment(commentId).then(comment => dispatch(receiveComment(comment)))
);

export const deleteComment = commentId => dispatch => (
    CommentAPIUtil.deleteComment(commentId).then(() => dispatch(removeComment(commentId)))
);
