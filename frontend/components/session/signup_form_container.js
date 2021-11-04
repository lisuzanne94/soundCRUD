import React from "react";
import { connect } from "react-redux";
import { signup, clearErrors } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import SessionForm from "./session_form";


const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: 'Create Account'
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user)),
    loginGuest: guest => dispatch(login(guest)),
    otherForm: (
        <button className="session-switch-btn" onClick={() => dispatch(openModal('Login'))}>
            Login Instead
        </button>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);