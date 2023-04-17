import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import userRducer from "./userReducer";

export default combineReducers({
    counter: counterReducer,
    user: userRducer
})