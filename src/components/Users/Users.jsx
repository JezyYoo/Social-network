import React from 'react';


class Users extends React.Component{

    componentDidMount(){
        // axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
        //         //     console.log(response);
        //         // })
        this.props.setUsers([
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
                location: {city: 'Moskow', country: 'Russia'},
                followed: false
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
        ])
    }

    render(){
        return <div>
            {this.props.users.map(u => <div>
                <div className='row col-md-10'>
                    <div><img width="100px"
                              src=" https://banner2.kisspng.com/20180410/bbw/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg"
                              alt=""/></div>
                </div>
                <div>
                    {u.followed?<button onClick={()=>this.props.unfollow(u.id)}>Follow</button>:<button onClick={()=>this.props.follow(u.id)}>Unfollow</button>}
                </div>

                <div>{u.firstName}</div>
                <div>{u.status}</div>
                <div>{u.location.city}</div>
                <div>{u.location.country}</div>

            </div>)
            }
        </div>
    }




}

export default Users;