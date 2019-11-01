import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk"
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer,
    authorization:authReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;

