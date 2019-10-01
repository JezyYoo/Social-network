const FOLLOW = 'FOLLOW';
const UNFOLLOW ='UNFOLLOW';
const SET_USERS ='SET_USERS';


const initialState = {
    users: [
        // {id: 1, firstName: 'Angrey',status:'Hello hello', location:{city:'Odessa',country:'Ukraine'},followed:true},
        // {id: 2, firstName: 'Sanda',status:'Programming is cool', location:{city:'Moskow',country:'Russia',followed:false}},
        // {id: 3, firstName: 'Perya',status:'I love France', location:{city:'Minsk',country:'Belarus'},followed:true},
        // {id: 4, firstName: 'Sveta',status:'London is the capital of Grate Britain', location:{city:'London',country:'UK'},followed:true},
    ]
}


const usersReducer = (state = initialState, action) => {

    switch(action.type)
    {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u,followed:true} : u)
            }
            break;

        case UNFOLLOW:
            debugger;
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u,followed:false} : u)
            }
            break;
        case SET_USERS:
            return{
                ...state,
                users:[...state.users,...action.users]
            }
            break;
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId:userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId:userId});
export const setUsersAC = (users)=>({type: SET_USERS,users});

export default usersReducer;