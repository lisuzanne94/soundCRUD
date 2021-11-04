import React from "react";

class SessionForm extends React.Component {

    componentDidMount () {
        if (this.props.errors.length > 0) { this.props.clearErrors(); }
    }

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginGuest = this.loginGuest.bind(this);
    }

    componentWillUnmount () {
        this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user).then(this.props.closeModal)
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    loginGuest() {
        const guest = {
            username: 'guest',
            password: 'password'
        };
        
        this.props.loginGuest(guest).then(this.props.closeModal)
    }

    renderErrors() {
        return (
        <ul>
            {this.props.errors.map((error, i) => (
                <li key={i}>{error}</li>
            ))}
        </ul>
        )
    }

    render() {

        return (
            <div className="session-form-div">

                {this.renderErrors()}
                <button className="session-login-guest-btn" onClick={this.loginGuest}>Login as a Guest</button>

                <span className="session-form-separator">
                    <span>or</span> 
                </span>

                <form className="session-form">
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder="Username here please :)"
                        />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="And now your password!"
                        />
                    <button className="session-submit-btn" onClick={this.handleSubmit}>{this.props.formType}</button>
                </form>

                <span className="session-form-separator">
                    <span>or</span>
                </span>
                
                {this.props.otherForm}
            </div>
        )
    }
};

export default SessionForm;