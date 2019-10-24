import React from 'react';

import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

import smth from '../../images/smth.jpg';
import har from '../../images/harry-potter.jpg';
import pool from '../../images/deadpool-fan-art-tony-santiago.jpg';
import m from '../../images/c7dppKDbG3JXuMfybV5tUX-320-80.jpg';
import anon from '../../images/anonymous-250.jpg'



let usersAjaxResponse = [
    {
        id: 1,
        firstName: 'Andrey',
        status: 'Hello hello',
        location: {city: 'Odessa', country: 'Ukraine'},
        followed: true,
        avatar: smth
    },
    {
        id: 2,
        firstName: 'Sandra',
        status: 'Programming is cool',
        location: {city: 'Moskow', country: 'Russia'},
        followed: false,
        avatar: har
    },
    {
        id: 3,
        firstName: 'Petya',
        status: 'I love France',
        location: {city: 'Minsk', country: 'Belarus'},
        followed: true,
        avatar: pool
    },
    {
        id: 4,
        firstName: 'Sveta',
        status: 'London is the capital of Grate Britain',
        location: {city: 'London', country: 'UK'},
        followed: true,
        avatar: anon
    },
    {
        id: 5,
        firstName: 'Danya',
        status:'Hello React-Redux',
        location:{city:'Odessa', country:'Ukraine'},
        followed:true,
        avatar: m
    }
]

class ProfileContainer extends React.Component {

    componentDidMount(){
        debugger;
        let id = this.props.match.params.userId - 1;
        if(id == undefined)
            id=4
        this.props.setUserProfile(usersAjaxResponse[id])


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

export default connect(mapStateToProps,{setUserProfile})(withRouter(ProfileContainer)) ;