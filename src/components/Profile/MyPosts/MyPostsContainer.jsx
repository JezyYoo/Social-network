import React from 'react';
import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = ()=>{
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text)=>{
        props.store.dispatch(changeNewPostTextActionCreator(text));
    }

    return (
        <MyPosts addPost={addPost} updatePostText={onPostChange}
                  posts={state.profilePage.postsData} newPostText={state.profilePage.newPostText}  />
    )
}

export default MyPostsContainer;