import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reucer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer
});

let store = createStore(reducers);

export default store;