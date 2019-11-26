import {stopSubmit} from 'redux-form'
const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
    login: null,
    password: null,
    rememberMe: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                login: action.data.login,
                password: action.data.password,
                rememberMe: action.data.rememberMe,
                isAuth: action.data.isAuth
            }
        default:
            return state;
    }
}

const usersData = [{login: "twin", password: "123"}, {login: "qwerty", password: "123"}]

const server = {

    post: (user) => {
        let res = false;
        usersData.forEach(u => {
            if (u.login === user.login && u.password === user.password) {
                res = true;
                return res;
            }
        })
        console.log(res);
        return res;

    },
    delete: () =>{
        return {}
    }
}


export const setAuthUserData = (data) => ({type: SET_USER_DATA, data});


export const login = (data) => (dispatch) => {
    if (server.post(data)) {
        data.isAuth = true;
        dispatch(setAuthUserData(data))
    }
    else
        dispatch(stopSubmit('login',{_error:"Wrong login or password"}));
}

export const logout = () => (dispatch) => {
    dispatch(setAuthUserData(server.delete()))
}


export default authReducer;