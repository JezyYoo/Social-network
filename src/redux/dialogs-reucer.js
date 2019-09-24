const initialState = {
    dialogsData: [
        {id: 1, name: 'Angrey'},
        {id: 2, name: 'Petya'},
        {id: 3, name: 'Sveta'},
    ],
    messagesData: [
        {id: 1, name: 'LOL'},
        {id: 2, name: 'Funny message'},
        {id: 3, name: 'Not funny message'},
    ],
    newMessage:"AVE"
}


const dialogsReducer = (state = initialState,action)=>{
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