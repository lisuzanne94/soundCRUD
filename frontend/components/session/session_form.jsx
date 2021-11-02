import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {

    componentDidMount () {
        this.props.clearErrors();
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

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    loginGuest() {
        const guest = {
            username: 'guest',
            password: 'password'
        };
        
        this.props.loginGuest(guest);
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
            <div>
                <h2>{this.props.formType}</h2>
                
                {this.renderErrors()}

                <form onSubmit={this.handleSubmit}>
                    <label>Username
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                        />
                    </label>
                    <br />
                    <label>Password
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <button>{this.props.formType}</button>
                </form>
                <br />
                <button onClick={this.loginGuest}>Login as a guest</button>
            </div>
        )
    }
};

export default SessionForm;