import React from 'react';
import cl from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={`col-md-12 ${cl.header}`}>
            <header>
                <img alt="" src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg" width="100px;"></img>
            </header>
            <div className={cl.log}>
                {props.isAuth ?
                    <div>
                        <div className={cl.name}>{props.login}</div>
                        <div>
                            <button onClick={props.logout}>LogOut</button>
                        </div>
                    </div> :
                    <NavLink to='/login'>Login</NavLink>
                }
            </div>

        </div>
    )
}

export default Header;