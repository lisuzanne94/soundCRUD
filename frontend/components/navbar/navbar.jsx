import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    
    render () {

        const { currentUser, logout } = this.props;

        const navLinks = currentUser ? (
            <div>
                <span>Welcome, {currentUser.username}!</span>
                <Link onClick={logout} to="/">Logout</Link>
            </div>
        ) : (
            <div>
                <span><Link to="/login">Log In</Link></span>
                <span>  </span>
                <span><Link to="/signup">Sign up</Link></span>
            </div>
        )

        return (
            <div className="navbar">
                <h2>SoundCRUD</h2>
                { navLinks }
            </div>
        )
    }
};

export default NavBar;