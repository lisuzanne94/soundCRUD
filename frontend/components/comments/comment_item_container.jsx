import { connect } from "react-redux";
import CommentItem from "./comment_item";
import { deleteComment } from "../../actions/comment_actions";

const mSTP = state => ({
    comments: Object.values(state.entities.comments)
});

const mDTP = dispatch => ({
});

export default connect(mSTP, null)(CommentItem);