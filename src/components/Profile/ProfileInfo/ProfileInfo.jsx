import React from 'react';
import cl from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

    if(!props.profile)
        return <div></div>

    return (
        <div>
            <div><img className={cl.main} src={props.profile.avatar} width='200px'></img></div>
            <div>
                <div><b>FirstName: </b> {props.profile.firstName}</div>
                <div><b>Country: </b>{props.profile.location.country}</div>
                <div><b>City: </b>{props.profile.location.city}</div>
                <div><b>Status: </b>{props.profile.status}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;