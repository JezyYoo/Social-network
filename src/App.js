import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
    return <BrowserRouter>
        <div className="container">
            <div className="row">
                <Header/>
            </div>
            <div className="row">
                <Navbar/>

                <Route render={() => <DialogsContainer />}
                       path='/dialogs'/>

                <Route render={() => <Profile/>} path='/profile'/>
                <Route component={News} path='/news'/>
                <Route component={Music} path='/music'/>
                <Route component={Settings} path='/settings'/>
                <Route render={()=><UsersContainer/>} path='/users'></Route>
            </div>
        </div>
    </BrowserRouter>;
}

export default App;
