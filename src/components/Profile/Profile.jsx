import React from 'react';
import cl from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () =>{
    return(
        <div className={`${cl.content} col-md-10`}>
        <img className={cl.main} src="https://i0.wp.com/www.euroscientist.com/wp-content/uploads/2019/06/cropped-social-media-3846597_1280-1.png?resize=672%2C372&ssl=1"></img>
        <div>ava + descr</div>
        <MyPosts/>
      </div>
    )
}

export default Profile;