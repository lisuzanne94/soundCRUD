import React from "react";
import EditUser from "./edit_user";
import { connect } from "react-redux";
import { fetchUser, updateUser } from "../../actions/user_actions";
import { closeModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => ({
    userId: ownProps.userId,
    user: state.entities.users[ownProps.userId]
});

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    updateUser: user => dispatch(updateUser(user)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(EditUser);