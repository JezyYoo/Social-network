import React from 'react';
import cl from './Header.module.css';
import {NavLink} from "react-router-dom";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component{

    render()
    {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) =>{
    return {
        isAuth:state.authorization.isAuth,
        login:state.authorization.login
    }
}

export default connect(mapStateToProps,{logout})(HeaderContainer);