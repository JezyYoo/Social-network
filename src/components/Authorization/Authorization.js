import React from 'react'
import cl from "./Auth.module.css"
import {Field, reduxForm} from "redux-form";

const Authorization = (props)=> {
    const onSubmit = (formData) =>{
        console.log(formData);
    }

    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit}/>
    </div>
}

let LoginForm = (props)=>{
        
    return <form onSubmit={props.handleSubmit}>
        <div>Login: <Field component={'input'} placeholder={"login"} name={'login'}/></div>
        <div>Password <Field component={'input'} placeholder={"password"} name={'password'}/></div>
        <div><input component={'input'} type="checkbox" name={'rememberMe'}/> remember me</div>
        <div><button>Login</button></div>
    </form>
}

LoginForm = reduxForm({form:'login'})(LoginForm);

export default Authorization ;