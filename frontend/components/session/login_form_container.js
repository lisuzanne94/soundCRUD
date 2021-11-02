import React from "react";
import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: 'Login'
});

const mapDispatchToProps = dispatch => ({
    
    processForm: user => dispatch(login(user)),
    loginGuest: guest => dispatch(login(guest)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);