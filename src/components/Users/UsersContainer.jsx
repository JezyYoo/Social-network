import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {follow, getUsersThunkCreator, setUsers, unfollow} from "../../redux/users-reducer";
import {getUsers, getUsersSuperSelector} from "../../redux/selectors/users-selectors";


class UsersContainer extends React.Component{

    componentDidMount(){
        this.props.getUsersThunkCreator();
    }

    render(){
        return <Users users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}/>
    }
}

const mapStateToProps = (state) => {
        return{
            users:getUsersSuperSelector(state)
        }
}


export default connect(mapStateToProps,{follow, unfollow, setUsers,getUsersThunkCreator})(UsersContainer)