import React from "react";
import { connect } from "react-redux";
import { signup, clearErrors } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import SessionForm from "./session_form";


const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: 'Sign Up'
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user)),
    loginGuest: guest => dispatch(login(guest)),
    otherForm: (
        <button onClick={() => dispatch(openModal('Login'))}>
            Login
        </button>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);