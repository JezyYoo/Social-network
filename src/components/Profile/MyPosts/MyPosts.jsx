import React from 'react';
import Post from './Post/Post';
import cl from './MyPosts.module.css'
import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {


    let postElements = props.posts.postsData.map(post => <Post message={post.msg} likes={post.likes} />);

    let newPostEl = React.createRef();

    let addPost = ()=>{
        let text = newPostEl.current.value;
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = ()=>{
        let text = newPostEl.current.value;
        props.dispatch(changeNewPostTextActionCreator(text));
    }

    return (
        <div>
            <div className={cl.addPost}>
            <div><h3>My posts</h3></div>

                <div><textarea ref={newPostEl} onChange={onPostChange} value={props.posts.newPostText}/></div>
                <button onClick={addPost}>Add</button>
            </div>

            {postElements}

        </div>
    )
}

export default MyPosts;