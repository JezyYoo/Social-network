import React from 'react';
import Post from './Post/Post';
import cl from './MyPosts.module.css'
import TextAreaAndButton from "./Post/TextAreaAndButton";


const MyPosts = (props) => {

    let postElements = props.posts.map(post => <Post key={post.id} message={post.msg} likes={post.likes} />);

    let onAddPost = (form)=>{
        console.log(form);
        props.addPost(form.text);
    }


    return (
        <div className={cl.addBlock}>
            <div className={cl.addPost}>
            <div><h3>My posts</h3></div>
                <TextAreaAndButton onSubmit={onAddPost} bText={'Add'} placeholder={'Enter post text'}/>
            </div>

            {postElements}

        </div>
    )
}

export default MyPosts;