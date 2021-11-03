import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    
    render () {

        const { currentUser, logout, openModal } = this.props;

        const navLinks = currentUser ? (
            <div>
                <span>Welcome, {currentUser.username}!</span>
                <Link to="/upload">Upload</Link>
                <button onClick={logout} to="/">Logout</button>
            </div>
        ) : (
            <div>
                <span><button onClick={() => openModal('Login')}>Log In</button></span>
                <span>  </span>
                    <span><button onClick={() => openModal('Sign Up')}>Sign up</button></span>
            </div>
        )

        return (
            <div className="navbar">
                <Link to="/discover"><h2>SoundCRUD</h2></Link>
                { navLinks }
            </div>
        )
    }
};

export default NavBar;