import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {follow, setUsers, unfollow} from "../../redux/users-reducer";


const mapStateToProps = (state) => {
        return{
            users:state.usersPage.users
        }
}
// const mapDispatchToProps = (dispatch) => {
//     return{
//         follow:(userId) => {dispatch(followAC(userId))},
//         unfollow:(userId) => {dispatch(unfollowAC(userId))},
//         setUsers:(users) =>{dispatch(setUsersAC(users))}
//     }
// }


const UsersContainer = connect(mapStateToProps,{follow, unfollow, setUsers})(Users)

export default UsersContainer