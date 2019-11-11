import React from 'react';
import {addMessageActionCreator, changeAddMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) =>{
    return{
        dialogs:state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        addMessage:(text) =>{dispatch(addMessageActionCreator(text))}
    }
}

// let AuthRedirectComponent = withAuthRedirect(Dialogs)
// const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);
// export default DialogsContainer;

export default compose(connect(mapStateToProps,mapDispatchToProps),withAuthRedirect)(Dialogs);