import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import AuthorizationContainer from "./components/Authorization/AuthorizationContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import cl from './App.module.css'

const App = (props) => {
    return <BrowserRouter>
        <div className="container">
            <div className="row">
                <HeaderContainer/>
            </div>
            <div className={` row ${cl.all}`}>
                <Navbar/>

                <Route render={() => <DialogsContainer />}
                       path='/dialogs'/>

                <Route render={() => <ProfileContainer/>} path='/profile/:userId?'/>
                <Route component={News} path='/news'/>
                <Route component={Music} path='/music'/>
                <Route component={Settings} path='/settings'/>
                <Route render={()=><UsersContainer/>} path='/users'></Route>
                <Route component={AuthorizationContainer} path='/login'></Route>
            </div>
        </div>
    </BrowserRouter>;
}

export default App;
