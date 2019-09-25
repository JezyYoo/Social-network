import React from 'react';
import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state)=>{
    return{
        posts:state.profilePage.postsData,
        newText:state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addPost: ()=>{dispatch(addPostActionCreator())},
        updatePostText: (text) => {dispatch(changeNewPostTextActionCreator(text))}
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;