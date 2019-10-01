import React from 'react';
import cl from './Users.module.css'

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                firstName: 'Angrey',
                status: 'Hello hello',
                location: {city: 'Odessa', country: 'Ukraine'},
                followed: true
            },
            {
                id: 2,
                firstName: 'Sanda',
                status: 'Programming is cool',
                location: {city: 'Moskow', country: 'Russia', followed: false}
            },
            {
                id: 3,
                firstName: 'Perya',
                status: 'I love France',
                location: {city: 'Minsk', country: 'Belarus'},
                followed: true
            },
            {
                id: 4,
                firstName: 'Sveta',
                status: 'London is the capital of Grate Britain',
                location: {city: 'London', country: 'UK'},
                followed: true
            }
        ]
    )
    }

    return (
        <div className='col-md-10'>
            {
                props.users.map(u =>
                    <div className='row'>
                        <div className='col-md-2'>
                            <div><img width='100px'
                                      src="https://banner2.kisspng.com/20180410/bbw/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg"
                                      alt=""/></div>
                            <div>
                                {u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                                    <button onClick={() => props.follow(u.id)}>Follow</button>
                                }
                            </div>
                        </div>

                        <div className='col-md-10'>
                            <div>{u.firstName}</div>
                            <div>{u.location.country} </div>
                            <div>{u.location.city}</div>
                            <div>{u.status}</div>
                            <div></div>
                        </div>

                    </div>
                )
            }
        </div>)


}

export default Users;