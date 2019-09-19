import React from 'react';
import Post from './Post/Post';
import cl from './MyPosts.module.css'

const MyPosts = () => {
    let postsData = [
        {id:1, msg:"Hello wordl",likes:'25'},
        {id:2, msg:"It's my life",likes:'2'},
        {id:3, msg:"React is so good",likes:'6'},
        {id:4, msg:"Fair enough!",likes:'13'},
    ];
    return (
        <div>
            <div className={cl.addPost}>
            <div><h3>My posts</h3></div>
                <div><textarea></textarea></div>
                <button>Add</button>
            </div>

            <Post message={postsData[0].msg} likes={postsData[0].likes} />
            <Post message={postsData[1].msg} likes={postsData[1].likes} />
            <Post message={postsData[2].msg} likes={postsData[2].likes} />
            <Post message={postsData[3].msg} likes={postsData[3].likes} />

        </div>
    )
}

export default MyPosts;