import React from 'react';
import cl from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";





const Profile = (props) => {
    return (
        <div className={`${cl.content} col-md-10`}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;