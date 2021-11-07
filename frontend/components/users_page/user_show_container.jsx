import { connect } from "react-redux";
import UserShow from "./user_show";
import { fetchUser } from "../../actions/user_actions";

const mSTP = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId]
});

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(mSTP, mDTP)(UserShow);