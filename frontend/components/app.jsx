import React from "react";
import { Route, Switch, Redirect } from "react-router";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import DiscoverPageContainer from "./discover/discover_page_container";
import NavBarContainer from "./navbar/navbar_container";
import TrackShowContainer from "./tracks/track_show_container";
import SplashContainer from "./splash/splash_container";
import CreateTrackFormContainer from "./tracks/create_track_form_container";
import EditTrackForm from "./tracks/edit_track_form_container";
import Modal from '../components/modal/modal'

const App = () => (
    <div>
        <Modal />
        <NavBarContainer />

        <Switch>
            <AuthRoute exact path="/" component={SplashContainer} />
            <ProtectedRoute exact path="/discover" component={DiscoverPageContainer} />
            <ProtectedRoute exact path="/tracks/:trackId" component={TrackShowContainer} />
            <ProtectedRoute exact path="/upload" component={CreateTrackFormContainer} />
            <ProtectedRoute exact path="/tracks/:trackId/edit" component={EditTrackForm} />

            <Route><Redirect to="/"></Redirect></Route>
        </Switch>
    </div>
);

export default App;