const profileReducer = (state,action)=>{
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