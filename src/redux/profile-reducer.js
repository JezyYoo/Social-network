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

export const addPostActionCreator = ()=> ({type:'addPost'});
export const changeNewPostTextActionCreator = (text)=> ({type:'changeNewPostText',text:text});
export const setUserProfile = (profile)=>({type:'setUserProfile',profile})

export default profileReducer;