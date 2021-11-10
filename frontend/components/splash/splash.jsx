import React from "react";
import { Link } from "react-router-dom";

class Splash extends React.Component {

    componentDidMount() {
        this.props.fetchTracks();
    }

    render () {

        if (!this.props) { return null }

        const { fetchTracks, tracks, openModal } = this.props;

        const splashTracks = [];
        const allTracksArr = Object.values(tracks)
        for (let i = 0; i < 12; i++) {
            splashTracks.push(allTracksArr[i])
        }

        return (
            <div className="splash-page">
            <div className="splash-banner">
                <div className="splash-header-bar">
                    <div className="splash-logo">
                        <img className="splash-logo-img" src="/soundcrud-logo-white-transparent-5.png" />
                        <span className="splash-main-title"><h2>S O U N D C R U D</h2></span>
                    </div>
                    <span className="splash-nav-buttons">
                        <span><button className="login-button" onClick={() => openModal('Login')}>Login</button></span>
                        <span><button className="signup-button" onClick={() => openModal('Sign Up')}>Create Account</button></span>
                    </span>
                </div>
            </div>

            <div className="splash-mid">
                <button className="splash-upload-button" onClick={() => openModal('Login')}>U P L O A D &#160; Y O U R &#160; O W N</button>
            </div>

            <div className="splash-tracks-msg">
                <p className="splash-track-list-msg">Hear what’s trending now in the SoundCRUD community {'(:'}</p>
            </div>

            <div className="splash-track-list-container">
                <ul className="splash-track-list">
                    {
                        splashTracks.map(track => (
                            track ? 
                            (<span className="splash-track-obj" key={track.id}>
                                <li>
                                    <img className="splash-track-cover-img" src={track.coverImage} />
                                </li>
                                <label className="splash-track-title">{track.title}</label>
                                <label className="splash-track-uploader">{track.uploader.username}</label>
                            </span>) : null
                        ))
                    }
                </ul>
            </div>
        </div> 
        )
    }  
};




export default Splash;