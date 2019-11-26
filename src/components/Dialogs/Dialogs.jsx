import React from 'react';
import cl from "./Dialogs.module.css"
import DialogItem from "./DialogItem/Dialogitem";
import Message from "./Message/Message";
import TextAreaAndButton from "../Profile/MyPosts/Post/TextAreaAndButton";



const Dialogs = (props) => {

    let dialogElements = props.dialogs.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messageElements = props.dialogs.messagesData.map(message => <Message msg={message.name}/>);



    let sendMessage = (form)=>{
        props.addMessage(form.text);
    }

    return (
        <div className={`col-md-10 row ${cl.dialogs}`}>
            <div className={`col-md-2 ${cl.dialogItems}`}>

                {dialogElements}
            </div>
            <div className={`col-md-10 ${cl.messages}`}>
                {messageElements}

                <div>
                    <TextAreaAndButton bText={'Send'} onSubmit={sendMessage}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;