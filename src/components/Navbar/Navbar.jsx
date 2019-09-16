import React from 'react';
import cl from './Navbar.module.css';

const Navbar = () =>{
    return(
      <nav className={`col-md-2 ${cl.navg}`}>
      <div className={`meny-item ${cl.active}`}>
          <a>Profile</a>
      </div>
      <div className="menu_item">
          <a>Messages</a>
      </div>
      <div v>
          <a>Music</a>
      </div>
      <div className="menu_item"> 
          <a>News</a>
      </div>
      <div className="menu_item">
          <a>Settings</a>
      </div>

    </nav>
    )
}

export default Navbar;