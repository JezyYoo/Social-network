import smth from '../images/smth.jpg';
import har from '../images/harry-potter.jpg';
import pool from '../images/deadpool-fan-art-tony-santiago.jpg';
import m from '../images/c7dppKDbG3JXuMfybV5tUX-320-80.jpg';
import anon from '../images/anonymous-250.jpg'

const initialState ={
    postsData: [
        {id: 1, msg: "Hello wordl", likes: '25'},
        {id: 2, msg: "It's my life", likes: '2'},
        {id: 3, msg: "React is so good", likes: '6'},
        {id: 4, msg: "Fair enough!", likes: '13'},
    ],
    profile:null,
    status:"status"
}

const profileReducer = (state = initialState,action)=>{
    let stateCopy = {...state};
    if(action.type === 'addPost')
    {
        stateCopy.postsData = [...state.postsData,{id: 5, msg: action.text, likes: '0'}];
    }
    else if(action.type === 'setUserProfile')
    {
        stateCopy.profile = action.profile;
    }
    else if(action.type === 'setStatus')
    {
        stateCopy.status = action.status;
    }

    return stateCopy
}

//action creators
export const addPost = (text) => ({type:'addPost',text});
export const setUserProfile = (profile)=>({type:'setUserProfile',profile})
export const setStatus = (status) => ({type:'setStatus',status})

let usersAjaxResponse = [
    {
        id: 1,
        firstName: 'Andrey',
        status: 'Hello hello',
        location: {city: 'Odessa', country: 'Ukraine'},
        followed: true,
        avatar: smth
    },
    {
        id: 2,
        firstName: 'Sandra',
        status: 'Programming is cool',
        location: {city: 'Moskow', country: 'Russia'},
        followed: false,
        avatar: har
    },
    {
        id: 3,
        firstName: 'Petya',
        status: 'I love France',
        location: {city: 'Minsk', country: 'Belarus'},
        followed: true,
        avatar: pool
    },
    {
        id: 4,
        firstName: 'Sveta',
        status: 'London is the capital of Grate Britain',
        location: {city: 'London', country: 'UK'},
        followed: true,
        avatar: anon
    },
    {
        id: 5,
        firstName: 'Danya',
        status:'Hello React-Redux',
        location:{city:'Odessa', country:'Ukraine'},
        followed:true,
        avatar: m
    }
]

//thunks
export const getProfileThunkCreator = (userId) => (dispatch)=>{
    debugger
        if(isNaN(userId))
            userId=4
        dispatch(setUserProfile(usersAjaxResponse[userId]))
    }


export const updateStatusThunkCreator = (status) => (dispatch) =>{
    dispatch(setStatus(status))
}

export default profileReducer;