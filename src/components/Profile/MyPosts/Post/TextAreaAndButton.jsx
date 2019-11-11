import React from 'react';
import {Field, reduxForm} from "redux-form";


let TextAreaAndButton = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={'textarea'} name={'text'} placeholder={'Enter text'} /></div>
            <div><button>{props.bText}</button></div>
        </form>
    )
}

TextAreaAndButton = reduxForm({form:'areaAndButton'})(TextAreaAndButton)

export default TextAreaAndButton;