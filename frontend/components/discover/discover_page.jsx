import React from "react";
import { Link } from "react-router-dom";

const DiscoverPage = ({ currentUser, logout }) => {

    return (
        <div>
            <h2>Welcome, {currentUser.username}!</h2>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default DiscoverPage;