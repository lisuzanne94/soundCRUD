import CommentForm from './comment_form';
import { createComment, clearCommentErrors } from '../../actions/comment_actions';
import { connect } from 'react-redux';

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    comment: {
        body: '',
        track_id: ownProps.commentTrackId
    },
    errors: state.errors.comment
});

const mDTP = dispatch => ({
    createComment: comment => dispatch(createComment(comment)),
    clearCommentErrors: () => dispatch(clearCommentErrors())
});

export default connect(mSTP, mDTP)(CommentForm);