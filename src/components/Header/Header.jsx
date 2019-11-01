import React from 'react';
import cl from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={`col-md-12 ${cl.header}`}>
            <header >
                <img src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg" width="100px;"></img>
            </header>

            <NavLink className={cl.log} to='/login'>Login</NavLink>
        </div>
    )
}

export default Header;