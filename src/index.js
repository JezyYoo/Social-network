import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import {Provider} from "react-redux";



ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
//PROVIDER CONTEXT

serviceWorker.unregister();
