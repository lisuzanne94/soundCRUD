import { combineReducers } from "redux";
import commentErrorsReducer from "./comment_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";
import trackErrorsReducer from "./track_errors_reducer";


const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    track: trackErrorsReducer,
    comment: commentErrorsReducer
});

export default errorsReducer;