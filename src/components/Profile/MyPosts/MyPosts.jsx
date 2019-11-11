import React from 'react';
import Post from './Post/Post';
import cl from './MyPosts.module.css'
import TextAreaAndButton from "./Post/TextAreaAndButton";


const MyPosts = (props) => {

    let postElements = props.posts.map(post => <Post message={post.msg} likes={post.likes} />);

    let onAddPost = (form)=>{
        props.addPost(form.text);
    }


    return (
        <div>
            <div className={cl.addPost}>
            <div><h3>My posts</h3></div>
                <TextAreaAndButton onSubmit={onAddPost} bText={'Add'}/>
            </div>

            {postElements}

        </div>
    )
}

export default MyPosts;