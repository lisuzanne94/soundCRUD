import React from "react";
import { Redirect, Route, withRouter } from "react-router";
import { connect } from "react-redux";

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            (!loggedIn ? <Component {...props} /> : <Redirect to="/discover" />)
        }
    />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            (loggedIn ? <Component {...props} /> : <Redirect to="/" />)
        }
    />
);

const checkUploader = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            (loggedIn ? <Component {...props} /> : <Redirect to="/" />)
        }
    />
);

const mapStateToProps = state => {
    // const trackId = Object.keys(state.entities.tracks)[0];
    // const uploaderId = state.entities.tracks[trackId].uploader.id

    return { 
        loggedIn: Boolean(state.session.id), 
        // isUploader: state.session.id === uploaderId
    };
};

export const AuthRoute = withRouter(
    connect(mapStateToProps, null)(Auth)
);

export const ProtectedRoute = withRouter(
    connect(mapStateToProps, null)(Protected)
);