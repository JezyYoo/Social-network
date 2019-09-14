import React from 'react';
import cl from './Header.module.css';

const Header = () =>{
    return(
        <header className={`col-md-12 ${cl.header}`}>
          <img src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg" width="100px;"></img>
        </header>

    )
}

export default Header;