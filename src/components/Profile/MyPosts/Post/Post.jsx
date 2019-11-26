import React from 'react';
import cl from './Post.module.css';

const Post = (props) => {
  return (
    <div className={cl.post}>
      <img alt={""}
        className={cl.ava}
        src="https://banner2.kisspng.com/20180410/bbw/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg"></img>
      <span>{props.message}</span>
      <div>Likes: {props.likes}</div>
    </div>
  )
}

export default Post;