const initialState = {
        dialogsData: [
            {id: 1, name: 'Andrey'},
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

    if (action.type === 'addMessage') {
        copyState.messagesData = [...state.messagesData,{id: 4, name: action.text}];
    }

    return copyState;
}

export const addMessageActionCreator = (text) => ({type: 'addMessage',text});


export default dialogsReducer;