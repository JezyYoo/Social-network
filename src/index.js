import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";


let renderEntireTree = ()=>
{
    ReactDOM.render(
        <App
           store={store} state={store.getState()} dispatch={store.dispatch.bind(store)}/> ,
        document.getElementById('root'));
}

renderEntireTree();
store.subscribe(renderEntireTree);



serviceWorker.unregister();
