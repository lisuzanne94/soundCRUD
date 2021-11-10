import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";
import playerReducer from "./player_reducer";

const uiReducer = combineReducers({
    modal: modalReducer,
    player: playerReducer
});

export default uiReducer;