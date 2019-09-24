import React from 'react';
import cl from "./Dialogs.module.css"
import DialogItem from "./DialogItem/Dialogitem";
import Message from "./Message/Message";
import {addMessageActionCreator, changeAddMessageActionCreator} from "../../redux/dialogs-reucer";



const Dialogs = (props) => {


    let dialogElements = props.dialogs.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messageElements = props.dialogs.messagesData.map(message => <Message msg={message.name}/>);

    let onTextChange = (e)=>{
        props.dispatch(changeAddMessageActionCreator(e.target.value))
    }

    let addMessage = ()=>{
        props.dispatch(addMessageActionCreator())
    }

    return (
        <div className={`row col-md-10 ${cl.dialogs}`}>
            <div className={`col-md-2 ${cl.dialogItems}`}>

                {dialogElements}
            </div>
            <div className={`col-md-10 ${cl.messages}`}>
                {messageElements}

                <div>
                    <div><textarea onChange={onTextChange} value ={props.dialogs.newMessage} props></textarea></div>
                    <div><button onClick={addMessage}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;