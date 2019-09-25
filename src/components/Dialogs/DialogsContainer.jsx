import React from 'react';
import {addMessageActionCreator, changeAddMessageActionCreator} from "../../redux/dialogs-reucer";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {
    let state = props.store.getState();

    let onTextChange = (text)=>{
        props.store.dispatch(changeAddMessageActionCreator(text))
    }

    let addMessage = ()=>{
        props.store.dispatch(addMessageActionCreator())
    }

    return (
        <Dialogs dialogs={state.dialogsPage} onTextChange={onTextChange} addMessage={addMessage}/>
    )
}

export default DialogsContainer;