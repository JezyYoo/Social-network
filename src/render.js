import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, changeNewPostText} from "./redux/state";


export let renderEntireTree = (state)=>
{
    ReactDOM.render(
        <App
        state={state}
        addPost={addPost}
        changeNewPostText={changeNewPostText}/> ,
        document.getElementById('root'));
}



