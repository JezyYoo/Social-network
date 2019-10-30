import React from 'react';
import {NavLink} from "react-router-dom";


const Users = (props)=> {

        return <div>
            {props.users.map(u => <div>
                <div className='row col-md-10'>
                    <NavLink to={/profile/ + u.id}><img width="100px"
                              src=" https://banner2.kisspng.com/20180410/bbw/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg"
                              alt=""/></NavLink>
                </div>
                <div>
                    {u.followed?<button onClick={()=>props.unfollow(u.id)}>Follow</button>:<button onClick={()=>props.follow(u.id)}>Unfollow</button>}
                </div>

                <div>{u.firstName}</div>
                <div>{u.status}</div>
                <div>{u.location.city}</div>
                <div>{u.location.country}</div>

            </div>)
            }
        </div>

}

export default Users;