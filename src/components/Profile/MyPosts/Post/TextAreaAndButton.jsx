import React from 'react';
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../../FornControls/TextArea";
import {maxLength, requiredField} from "../../../../validators";


const max_length = maxLength(10);

let TextAreaAndButton = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field validate={[requiredField,max_length]} component={TextArea} name={'text'} placeholder={props.placeholder} /></div>
            <div><button>{props.bText}</button></div>
        </form>
    )
}

TextAreaAndButton = reduxForm({form:'areaAndButton'})(TextAreaAndButton)

export default TextAreaAndButton;