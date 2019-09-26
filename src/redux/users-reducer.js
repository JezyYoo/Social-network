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
    newMessage: "AVE"
}


const dialogsReducer = (state = initialState, action) => {
    var copyState = {...state}

    if (action.type == 'addMessage') {
        copyState.messagesData = [...state.messagesData,{id: 4, name: state.newMessage}];
        copyState.newMessage = '';
    }
    else if (action.type == 'changeAddMessage') {
        copyState.newMessage = action.mes_text;
    }
    return copyState;
}

export const addMessageActionCreator = () => ({type: 'addMessage'});
export const changeAddMessageActionCreator = (text) => ({type: 'changeAddMessage', mes_text: text});

export default dialogsReducer;