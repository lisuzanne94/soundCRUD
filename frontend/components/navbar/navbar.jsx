import React from "react";
import { NavLink, Link } from "react-router-dom";

class NavBar extends React.Component {

    render () {

        const { currentUser, logout, openModal } = this.props;

        const navBar = currentUser ? (
            <div className="navbar-bg">
                <div className="navbar">
                    <div className="left-side-bar">
                        <Link to="/" className="nav-link">
                            <div className="left-nav-btn">
                                <img className="discover-logo" src="/soundcrud-logo-transparent-3.png" />
                            </div>
                        </Link>

                        <NavLink className="nav-link" className="nav-home-link" activeClassName="active-nav-btn" to="/discover">
                            <div className="left-nav-btn">Home</div>
                        </NavLink>
                    </div>

                    <div className="right-side-bar">
                        <NavLink className="nav-link" to="/upload">
                            <div className="nav-upload-btn right-nav-btn" activeclassname="nav-btn-active">Upload</div>
                        </NavLink>
                        
                        <Link className="nav-link" to={`/users/${currentUser.id}`}>
                            <div className="nav-user-btn right-nav-btn">{currentUser.username}</div>
                        </Link>
                        <Link className="nav-link" to="/">
                            <div className="logout-btn right-nav-btn" onClick={logout}>Logout</div>
                        </Link>
                    </div>
                </div>
            </div>
        ) : (
            null
        )


        // const currentUserSection = currentUser ? currentUser.username : "Please log in!"

        // const navBar = (
        //     <div className="navbar-bg">
        //         <div className="navbar">
        //             <div className="left-side-bar">
        //                 <Link to="/" className="nav-link">
        //                     <div className="left-nav-btn">
        //                         <img className="discover-logo" src="/soundcrud-logo-transparent-3.png" />
        //                     </div>
        //                 </Link>

        //                 <NavLink className="nav-link" className="nav-home-link" activeclassname="nav-btn-active" to="/discover">
        //                     <div className="left-nav-btn">Home</div>
        //                 </NavLink>
        //             </div>

        //             <div className="right-side-bar">
        //                 <NavLink className="nav-link" to="/upload">
        //                     <div className="nav-upload-btn right-nav-btn" activeclassname="nav-btn-active">Upload</div>
        //                 </NavLink>

        //                 <Link className="nav-link" to="#">
        //                     <div className="nav-user-btn right-nav-btn">{currentUserSection}</div>
        //                 </Link>
        //                 <Link className="nav-link" to="/">
        //                     <div className="logout-btn right-nav-btn" onClick={logout}>Logout</div>
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        // ) 

        return (
            <div className="navbar-container">
                { navBar }
            </div>
        )
    }
};

export default NavBar;