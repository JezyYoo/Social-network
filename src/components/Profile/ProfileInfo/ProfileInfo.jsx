import React from 'react';
import cl from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <img className={cl.main}
                 src="https://i0.wp.com/www.euroscientist.com/wp-content/uploads/2019/06/cropped-social-media-3846597_1280-1.png?resize=672%2C372&ssl=1"></img>
            <div>ava + descr</div>
        </div>
    )
}

export default ProfileInfo;