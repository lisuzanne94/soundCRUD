import { connect } from "react-redux";
import CommentItem from "./comment_item";
import { deleteComment } from "../../actions/comment_actions";

const mSTP = state => ({

});

const mDTP = dispatch => ({
});

export default connect(null, mDTP)(CommentItem);