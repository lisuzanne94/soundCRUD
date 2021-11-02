import React from "react";
import { Route, Switch, Redirect } from "react-router";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import DiscoverPageContainer from "./discover/discover_page_container";
import NavBarContainer from "./navbar/navbar_container";
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import TrackShowContainer from "./tracks/track_show_container";
import Splash from "./splash/splash";
import CreateTrackFormContainer from "./tracks/create_track_form_container";
import EditTrackForm from "./tracks/edit_track_form_container";
import Modal from '../components/modal/modal'

const App = () => (
    <div>
        <Modal />
        <NavBarContainer />

        <Switch>
            <AuthRoute exact path="/" component={Splash} />
            {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
            <ProtectedRoute exact path="/discover" component={DiscoverPageContainer} />
            <ProtectedRoute exact path="/tracks/:trackId" component={TrackShowContainer} />
            <ProtectedRoute exact path="/upload" component={CreateTrackFormContainer} />
            <ProtectedRoute exact path="/tracks/:trackId/edit" component={EditTrackForm} />

            <Route><Redirect to="/"></Redirect></Route>
        </Switch>
    </div>
);

export default App;