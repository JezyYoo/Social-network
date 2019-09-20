import React from 'react';
import cl from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/Dialogitem";
import Message from "./Message/Message";



const Dialogs = (props) => {


    let dialogElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messageElements = props.messages.map(message => <Message msg={message.name}/>);

    return (
        <div className={`row col-md-10 ${cl.dialogs}`}>
            <div className={`col-md-2 ${cl.dialogItems}`}>
                {dialogElements}

                {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>*/}
                {/*<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>*/}
                {/*<DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>*/}

            </div>
            <div className={`col-md-10 ${cl.messages}`}>
                {messageElements}

                {/*<Message msg={messagesData[0].name}/>*/}
                {/*<Message msg={messagesData[1].name}/>*/}
                {/*<Message msg={messagesData[2].name}/>*/}
            </div>
        </div>
    )
}

export default Dialogs;