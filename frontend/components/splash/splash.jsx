import React from "react";
import { Link } from "react-router-dom";

const Splash = ({ openModal }) => (
    <div className="splash-page">
        <div className="splash-banner">
            <div className="splash-header-bar">
                <span className="splash-main-title"><h2>SoundCRUD</h2></span>
                <span className="splash-nav-buttons">
                    <span><button className="login-button" onClick={() => openModal('Login')}>Log In</button></span>
                    <span><button className="signup-button" onClick={() => openModal('Sign Up')}>Sign up</button></span>
                </span>
            </div>
        </div>
        <p className="splash-placeholder-content">SPLASH UNDER CONSTRUCTION :{')'}</p>
    </div> 

);

export default Splash;