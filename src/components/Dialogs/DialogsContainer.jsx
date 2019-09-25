import React from 'react';
import {addMessageActionCreator, changeAddMessageActionCreator} from "../../redux/dialogs-reucer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state) =>{
    return{
        dialogs:state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        onTextChange:(text) =>{dispatch(changeAddMessageActionCreator(text))},
        addMessage:() =>{dispatch(addMessageActionCreator())}
    }
}


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;