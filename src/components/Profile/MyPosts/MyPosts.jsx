import React from 'react';
import Post from './Post/Post';
import cl from './MyPosts.module.css'

const MyPosts = (props) => {


    let postElements = props.posts.map(post => <Post message={post.msg} likes={post.likes} />);

    let newPostEl = React.createRef();

    let addPost = ()=>{
        let text = newPostEl.current.value;
        props.addPost(text);
        newPostEl.current.value= "";
    }

    return (
        <div>
            <div className={cl.addPost}>
            <div><h3>My posts</h3></div>

                <div><textarea ref={newPostEl}></textarea></div>
                <button onClick={addPost}>Add</button>
            </div>

            {postElements}

        </div>
    )
}

export default MyPosts;