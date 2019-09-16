import React from 'react';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      <textarea></textarea>
      <button>Add</button>

      <Post message="Hello wordl" likes="25"/>
      <Post message="It's my life" likes="2"/>
      <Post message="React is so good" likes="6"/>
      <Post message="Fair enough!" likes="13"/>
    </div>
  )
}

export default MyPosts;