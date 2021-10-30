import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
        this.setState({
            username: '',
            password: ''
        })
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    render() {

        const link = this.props.formType === 'Sign Up' ? (
            <Link to='/login'>Login</Link>
        ) : (
            <Link to='/signup'>Sign Up</Link>
        )

        return (
            <div>
                <h2>{this.props.formType}</h2>
                <span>{link}</span>

                <ul>
                    {this.props.errors.map((error, i) => (
                        <li key={i}>{error}</li>
                    ))}
                </ul>

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
            </div>
        )
    }
};

export default SessionForm;