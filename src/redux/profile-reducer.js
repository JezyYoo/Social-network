const initialState ={
    postsData: [
        {id: 1, msg: "Hello wordl", likes: '25'},
        {id: 2, msg: "It's my life", likes: '2'},
        {id: 3, msg: "React is so good", likes: '6'},
        {id: 4, msg: "Fair enough!", likes: '13'},
    ],
    newPostText: 'aaaaaa'
}

const profileReducer = (state = initialState,action)=>{
    if(action.type == 'addPost')
    {
        state.postsData.push(
            {
                id: 5,
                msg: state.newPostText,
                likes: '0'
            })
        state.newPostText = '';
    }
    else if(action.type == 'changeNewPostText')
    {
        state.newPostText  = action.text;
    }
    return state;
}

export const addPostActionCreator = ()=> ({type:'addPost'});
export const changeNewPostTextActionCreator = (text)=> ({type:'changeNewPostText',text:text});

export default profileReducer;