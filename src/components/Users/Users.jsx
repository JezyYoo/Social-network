import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Users.module.css'


const Users = (props)=> {

        return <div className={`${s.usersPage} col-md-10`}>
            {props.users.map(u => <div className={s.user}>
                <div >
                    <NavLink to={/profile/ + u.id}><img width="100px"
                              src=" https://banner2.kisspng.com/20180410/bbw/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg"
                              alt=""/></NavLink>
                </div>
                <div>
                    {u.followed?<button onClick={()=>props.unfollow(u.id)}>Follow</button>:<button onClick={()=>props.follow(u.id)}>Unfollow</button>}
                </div>

                <div> <b>Name: </b> {u.firstName}</div>
                <div><b>Status: </b>{u.status}</div>
                <div><b>City: </b>{u.location.city}</div>
                <div><b>Country: </b>{u.location.country}</div>

            </div>)
            }
        </div>

}

export default Users;