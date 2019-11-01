import React from 'react'
import cl from "./Auth.module.css"

const Authorization = (props)=> {
    return <div>
        {
            props.isAuth ?
                <button className={cl.logout} onClick={props.logOut}>Log Out</button> :
                <button className={cl.login} onClick={props.logIn}>Log In</button>
        }
    </div>
}

export default Authorization ;