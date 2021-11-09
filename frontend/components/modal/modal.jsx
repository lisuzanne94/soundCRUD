import React from "react";
import { withRouter } from "react-router";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";
import EditTrackFormContainer from "../tracks/edit_track_form_container";
import EditUserContainer from "../users_page/edit_user_container";

const Modal = props => {
    if (!props.modal) {
        return null;
    };

    let component;
    switch (props.modal) {
        case 'Login':
            component = <LoginFormContainer />;
            break;
        case 'Sign Up':
            component = <SignupFormContainer />;
            break;
        case 'Update Track':
            component = <EditTrackFormContainer modalTrackId={props.modalTrackId} />;
            break;
        case 'Edit User':
            component = <EditUserContainer userId={props.userId} />;
            break;
        default:
            return null;
    }
    // debugger

    return (
        <div className="modal-bg" onClick={props.closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    )
}

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    modalTrackId: ownProps.modalTrackId,
    modal: state.ui.modal
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(mSTP, mDTP)(Modal))