import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    
    render () {

        const { currentUser, logout, openModal } = this.props;

        const navBar = currentUser ? (
            <div className="navbar">
                <Link to="/discover"><h2>soundCRUD</h2></Link>
                <span>Welcome, {currentUser.username}!</span>
                <Link to="/upload">Upload</Link>
                <button onClick={logout} to="/">Logout</button>
            </div>
        ) : (
            null
        )

        return (
            <div className="navbar-container">
                { navBar }
            </div>
        )
    }
};

export default NavBar;