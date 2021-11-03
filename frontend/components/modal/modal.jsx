import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";

const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'Login':
            component = <LoginFormContainer />;
            break;
        case 'Sign up':
            component = <SignupFormContainer />;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-bg" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    )
}

const mSTP = state => ({
    modal: state.ui.modal
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(Modal)