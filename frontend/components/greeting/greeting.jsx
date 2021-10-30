import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {

    const personalGreeting = () => (
        <div>
            <h2>Welcome, {currentUser.username}!</h2>
            <button onClick={logout}>Logout</button>
        </div>
    )

    const sessionLinks = () => (
        <div>
            <Link to="/signup">Sign Up</Link>
            <br />
            <Link to="/login">Log In</Link>
        </div>
    )

    return (
        currentUser ? personalGreeting() : sessionLinks()
    )
};

export default Greeting;