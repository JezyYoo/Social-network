const FOLLOW = 'FOLLOW';
const UNFOLLOW ='UNFOLLOW';
const SET_USERS ='SET_USERS';
const SET_STATUS = "SET_STATUS";


const initialState = {
    users: [
        // {id: 1, firstName: 'Andrey',status:'Hello hello', location:{city:'Odessa',country:'Ukraine'},followed:true},
        // {id: 2, firstName: 'Sanda',status:'Programming is cool', location:{city:'Moskow',country:'Russia',followed:false}},
        // {id: 3, firstName: 'Perya',status:'I love France', location:{city:'Minsk',country:'Belarus'},followed:true},
        // {id: 4, firstName: 'Sveta',status:'London is the capital of Grate Britain', location:{city:'London',country:'UK'},
        // {id: 5, firstName: 'Danya',status:'Hello React-Redux', location:{city:'Odessa',country:'Ukraine'},followed:true}followed:true},
    ]
}

const usersReducer =  (state = initialState,action)=>
{
    switch(action.type)
    {
        case FOLLOW:
            return{
                ...state,
                users: state.users.map(u => (u.id === action.userId ? {...u,followed:true} : u))
            }
        case UNFOLLOW:
            return{
                ...state,
                users: state.users.map(u => (u.id === action.userId ? {...u,followed:false} : u))
            }
        case SET_USERS:
        return {
            ...state,
            users:[...action.users]
        }
        default :
            return state;
    }
}

export const follow = (userId) => ({type:FOLLOW,userId});
export const unfollow = (userId) => ({type:UNFOLLOW,userId});
export const setUsers = (users) => ({type:SET_USERS,users});



export const getUsersThunkCreator = ()=>{
    return (dispatch) => {
// axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
        //         //     console.log(response);
        //         // })
        const getUsersFromServer = ()=>{
            return [
                {
                    id: 1,
                    firstName: 'Andrey',
                    status: 'Hello hello',
                    location: {city: 'Odessa', country: 'Ukraine'},
                    followed: true,
                },
                {
                    id: 2,
                    firstName: 'Sandra',
                    status: 'Programming is cool',
                    location: {city: 'Moskow', country: 'Russia'},
                    followed: false,
                },
                {
                    id: 3,
                    firstName: 'Petya',
                    status: 'I love France',
                    location: {city: 'Minsk', country: 'Belarus'},
                    followed: true,
                },
                {
                    id: 4,
                    firstName: 'Sveta',
                    status: 'London is the capital of Grate Britain',
                    location: {city: 'London', country: 'UK'},
                    followed: true,
                },
                {id: 5,
                    firstName: 'Danya',
                    status:'Hello React-Redux',
                    location:{city:'Odessa', country:'Ukraine'},
                    followed:true,
                }
            ]
        }
        const users = getUsersFromServer()
        dispatch(setUsers(users))
    }
}


export default usersReducer;