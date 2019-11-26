import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../FornControls/TextArea";
import {maxLength, requiredField} from "../../validators";
import {Redirect} from "react-router-dom";
import s from './Auth.module.css'

const Authorization = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
        props.login(formData);
    }

    if (props.isAuth)
        return <Redirect to='/profile'/>

    return <div className={`${s.auth} col-md-10`}>
        <h1>Login</h1>
        <LoginForm  onSubmit={onSubmit}/>
    </div>
}

const max_length_login = maxLength(8)
const max_length_password = maxLength(16)

let LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <div className={s.inlineBlock}> <b>Login: </b></div>
            <Field component={Input} validate={[requiredField, max_length_login]} placeholder={"login"} name={'login'}/>
        </div>

        <div><b>Password:</b>
            <Field component={Input} validate={[requiredField, max_length_password]} placeholder={"password"}
                   name={'password'} type={'password'}/>
        </div>

        <div>
            <input component={'input'} type="checkbox" name={'rememberMe'}/>
            remember me
        </div>

        {props.error && <div className={s.formError}>{props.error}</div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

LoginForm = reduxForm({form: 'login'})(LoginForm);

export default Authorization;