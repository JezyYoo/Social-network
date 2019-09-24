let store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            postsData: [
                {id: 1, msg: "Hello wordl", likes: '25'},
                {id: 2, msg: "It's my life", likes: '2'},
                {id: 3, msg: "React is so good", likes: '6'},
                {id: 4, msg: "Fair enough!", likes: '13'},
            ],
            newPostText: 'aaaaaa'
        }

    },

    getState() {
        return this._state;
    },

    addPost() {
        this._state.profilePage.postsData.push(
            {
                id: 5,
                msg: this._state.profilePage.newPostText,
                likes: '0'
            })
        this._state.profilePage.newPostText = '';
        this.renderEntireTree();
    },

    changeNewPostText(text) {
        this._state.profilePage.newPostText = text;
        this.renderEntireTree();

    },

    addMessage(){
        this._state.dialogsPage.messagesData.push(
            {
                id: 4, name: this._state.dialogsPage.newMessage
            }
        );
        this._state.dialogsPage.newMessage ='';
        this.renderEntireTree();
    },

    changeNewMessageText(text){
      this._state.dialogsPage.newMessage  = text;
      this.renderEntireTree();
    },

    renderEntireTree() {
    },

    subscribe(observer) {
        this.renderEntireTree = observer;
    },

    dispatch(action) {
        switch (action.type) {
            case 'addPost':
                this.addPost()
                break;
            case 'changeNewPostText':
                this.changeNewPostText(action.text);
                break;
            case 'addMessage':
                this.addMessage();
                break;
            case 'changeAddMessage':
                this.changeNewMessageText(action.mes_text);
                break;
        }
    }
}

export const addPostActionCreator = ()=> ({type:'addPost'});
export const changeNewPostTextActionCreator = (text)=> ({type:'changeNewPostText',text:text});

export const addMessageActionCreator = ()=> ({type:'addMessage'});
export const changeAddMessageActionCreator = (text)=> ({type:'changeAddMessage',mes_text:text});


window.store = store;
export default store;