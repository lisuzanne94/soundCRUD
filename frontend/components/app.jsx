import React from "react";
import { Route, Switch } from "react-router";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import DiscoverPageContainer from "./discover/discover_page_container";
import NavBarContainer from "./navbar/navbar_container";
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import PostShowContainer from "./tracks/track_show_container";
import Splash from "./splash/splash";

const App = () => (
    <div>

        <NavBarContainer />

        <Switch>
            <AuthRoute exact path="/" component={Splash} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/discover" component={DiscoverPageContainer} />
            <ProtectedRoute exact path="/tracks/:trackId" component={PostShowContainer} />
        </Switch>
    </div>
);

export default App;