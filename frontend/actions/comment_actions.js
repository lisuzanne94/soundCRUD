import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const CLEAR_COMMENT_ERRORS = 'CLEAR_COMMENT_ERRORS';

export const CLEAR_COMMENTS_FROM_STATE = 'CLEAR_COMMENTS_FROM_STATE';

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
});


// After checking soundcloud, they dont show errors for blank comments, but will keep error handling here just in case
const receiveCommentErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
});

export const clearCommentErrors = () => ({
    type: CLEAR_COMMENT_ERRORS
});

export const clearCommentsFromState = () => ({
    type: CLEAR_COMMENTS_FROM_STATE
});

export const createComment = comment => dispatch => (
    CommentAPIUtil.createComment(comment).then(comment => dispatch(receiveComment(comment))
);

export const deleteComment = commentId => dispatch => (
    CommentAPIUtil.deleteComment(commentId).then(() => dispatch(removeComment(commentId)))
);
