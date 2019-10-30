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
    newPostText: 'aaaaaa',
    profile:null
}

const profileReducer = (state = initialState,action)=>{
    let stateCopy = {...state};
    if(action.type == 'addPost')
    {
        stateCopy.postsData = [...state.postsData,{id: 5, msg: stateCopy.newPostText, likes: '0'}];
        stateCopy.newPostText = '';
    }
    else if(action.type == 'changeNewPostText')
    {
        stateCopy.newPostText  = action.text;
    }
    else if(action.type =='setUserProfile')
    {
        stateCopy.profile = action.profile;
    }
    return stateCopy
}

//action creators
export const addPostActionCreator = ()=> ({type:'addPost'});
export const changeNewPostTextActionCreator = (text)=> ({type:'changeNewPostText',text:text});
export const setUserProfile = (profile)=>({type:'setUserProfile',profile})

//thunks
export const getProfileThunkCreator = (userId) =>{
    return (dispatch) =>{
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
        if(userId == undefined)
            userId=4
        dispatch(setUserProfile(usersAjaxResponse[userId]))
    }
}

export default profileReducer;