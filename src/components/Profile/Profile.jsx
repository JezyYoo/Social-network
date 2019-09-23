import React from 'react';
import cl from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";




const Profile = (props) => {

    return (
        <div className={`${cl.content} col-md-10`}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;