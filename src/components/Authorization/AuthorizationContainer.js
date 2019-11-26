import React from 'react'
import Authorization from "./Authorization";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";

class AuthorizationContainer extends React.Component {

    render(){
        return <Authorization {...this.props}/>
    }
}

const mapStateToProps = (state) =>{
    return {
        isAuth:state.authorization.isAuth
    }
}

export default connect(mapStateToProps,{login})(AuthorizationContainer)  ;