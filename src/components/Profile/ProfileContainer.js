import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunkCreator, updateStatusThunkCreator} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount(){
        debugger;
        let id = this.props.match.params.userId - 1;
        this.props.getProfileThunkCreator(id);
    }

    render(){
        return <Profile {...this.props} profile = {this.props.profile} updateStatus = {this.props.updateStatusThunkCreator}/>
    }
}

const mapStateToProps = (state)=>{
    return{
        profile:state.profilePage.profile,
        status:state.profilePage.status
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
//
// export default connect(mapStateToProps,{getProfileThunkCreator})(withRouter(AuthRedirectComponent)) ;

export default compose(connect(mapStateToProps,{getProfileThunkCreator,updateStatusThunkCreator}),withRouter,withAuthRedirect)(ProfileContainer)