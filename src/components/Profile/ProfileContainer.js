import React from 'react';

import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunkCreator, setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount(){
        let id = this.props.match.params.userId - 1;
        this.props.getProfileThunkCreator(id);
    }

    render(){
        return <Profile {...this.props} profile = {this.props.profile}/>
    }
}

const mapStateToProps = (state)=>{

    return{
        profile:state.profilePage.profile,
    }
}

export default connect(mapStateToProps,{getProfileThunkCreator})(withRouter(ProfileContainer)) ;