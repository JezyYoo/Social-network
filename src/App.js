import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {addPost} from "./redux/state";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="container">
                <div className="row">
                    <Header/>
                </div>
                <div className="row">
                    <Navbar/>

                    <Route render={() => <Dialogs
                        messages={props.state.dialogsPage.messagesData}
                        dialogs={props.state.dialogsPage.dialogsData}/>}
                           path='/dialogs'/>

                    <Route render={() => <Profile posts={props.state.profilePage.postsData}
                           addPost={addPost}/>} path='/profile'/>
                    <Route component={News} path='/news' />
                    <Route component={Music} path='/music' />
                    <Route component={Settings} path='/settings' />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
