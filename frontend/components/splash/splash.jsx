import React from "react";
import { Link } from "react-router-dom";

const Splash = () => (
    <div>
        <h1>THIS IS THE SPLASH PAGE</h1>
        <Link to="/signup">Sign up</Link>
        <Link to="/login">Log In</Link>
    </div> 

);

export default Splash;