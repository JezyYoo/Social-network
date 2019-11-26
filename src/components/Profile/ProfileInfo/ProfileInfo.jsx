import React from 'react';
import cl from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if(!props.profile)
        return <div></div>

    return (
        <div className={cl.info}>
            <div className={cl.img}><img alt={""} className={cl.main} src={props.profile.avatar} width='200px'></img></div>
            <div>
                <div><b>Status:</b><ProfileStatus status={props.status} updateStatus={props.updateStatus}/></div>
                <div><b>FirstName: </b> {props.profile.firstName}</div>
                <div><b>Country: </b>{props.profile.location.country}</div>
                <div><b>City: </b>{props.profile.location.city}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;