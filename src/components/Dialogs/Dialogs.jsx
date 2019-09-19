import React from 'react';
import cl from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


const DialogItem = (props)=>{
    return(
        <div className={cl.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) =>{
    return(
        <div className={cl.message}>{props.msg}</div>
    )
}

const Dialogs = (props) => {
    let dialogsData = [
        {id:1, name:'Angrey'},
        {id:2, name:'Petya'},
        {id:3, name:'Sveta'},
    ];

    let messagesData = [
        {id:1, name:'LOL'},
        {id:2, name:'Funny message'},
        {id:3, name:'Not funny message'},
    ];

    let dialogElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messageElements = messagesData.map(message => <Message msg={message.name}/>);

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