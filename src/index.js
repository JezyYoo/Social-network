import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/state";


let renderEntireTree = ()=>
{
    ReactDOM.render(
        <App
            state={store.getState()}
            addPost={store.addPost.bind(store)}
            changeNewPostText={store.changeNewPostText.bind(store)}/> ,
        document.getElementById('root'));
}

renderEntireTree();
store.subscribe(renderEntireTree);



serviceWorker.unregister();
