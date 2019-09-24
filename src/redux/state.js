import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reucer";

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

    renderEntireTree() {
    },

    subscribe(observer) {
        this.renderEntireTree = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this.renderEntireTree();
    }
}


window.store = store;
export default store;