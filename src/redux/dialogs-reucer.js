const dialogsReducer = (state,action)=>{
    if(action.type == 'addMessage')
    {
        state.messagesData.push(
            {
                id: 4, name: state.newMessage
            }
        );
        state.newMessage ='';
    }
    else if(action.type == 'changeAddMessage')
    {
        state.newMessage = action.mes_text;
    }
    return state;
}

export const addMessageActionCreator = ()=> ({type:'addMessage'});
export const changeAddMessageActionCreator = (text)=> ({type:'changeAddMessage',mes_text:text});

export default dialogsReducer;