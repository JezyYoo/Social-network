const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const initialState = {
    isAuth: true
}

const authReducer =  (state = initialState,action)=>
{
    switch(action.type)
    {
        case LOGIN:
            return {
                ...state,isAuth:true
            }
        case LOGOUT:
            return {
                ...state,isAuth:false
            }
        default:
            return state;
    }
}


export const logIn = ()=> ({type:"LOGIN"});
export const logOut = ()=> ({type:"LOGOUT"});

export default authReducer;