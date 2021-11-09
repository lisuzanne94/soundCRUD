import { connect } from "react-redux";
import UserShow from "./user_show";
import { fetchUser, updateUser } from "../../actions/user_actions";
import { openModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    userId: ownProps.match.params.userId
});

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    updateUser: user => dispatch(updateUser(user)),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(UserShow);