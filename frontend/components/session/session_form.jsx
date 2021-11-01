import React from "react";

class SessionForm extends React.Component {
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

    render() {

        return (
            <div>
                <h2>{this.props.formType}</h2>

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
                <br />
                <button onClick={this.loginGuest}>Login as a guest</button>
            </div>
        )
    }
};

export default SessionForm;