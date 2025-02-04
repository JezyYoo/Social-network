import React from 'react';
import cl from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={`col-md-2 ${cl.navg}`}>
            <div className={cl.menu_item}>
                <NavLink to='/profile' activeClassName={cl.active}>Profile</NavLink>
            </div>
            <div className={cl.menu_item}>
                <NavLink to='/dialogs' activeClassName={cl.active}>Messages</NavLink>
            </div>
            <div className={cl.menu_item}>
                <NavLink to='/music' activeClassName={cl.active}>Music</NavLink>
            </div>
            <div className={cl.menu_item}>
                <NavLink to='/news' activeClassName={cl.active}>News</NavLink>
            </div>
            <div className={cl.menu_item}>
                <NavLink to='/settings' activeClassName={cl.active}>Settings</NavLink>
            </div>
            <div className={cl.menu_item}>
                <NavLink to='/users' activeClassName={cl.active}>Users</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;