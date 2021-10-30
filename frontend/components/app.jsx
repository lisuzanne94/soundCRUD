import React from "react";
import { Route, Switch } from "react-router";
import { AuthRoute } from "../util/route_util";
import GreetingContainer from './greeting/greeting_container'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
    <div>
        <header>
            <h1>SoundCRUD</h1>
            <GreetingContainer />
        </header>

        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;