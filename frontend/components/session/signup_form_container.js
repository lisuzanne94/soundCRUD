import { connect } from "react-redux";
import { signup, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";


const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: 'Sign Up'
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user)),
    loginGuest: guest => dispatch(login(guest)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);