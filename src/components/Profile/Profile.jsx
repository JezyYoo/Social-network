import React from 'react';
import cl from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {
    return (
        <div className={`${cl.content} col-md-10`}>
            <ProfileInfo className={cl.inf} status={props.status} profile={props.profile} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;