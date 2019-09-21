import {renderEntireTree} from "../render";

let state ={
    dialogsPage:{
        dialogsData: [
            {id:1, name:'Angrey'},
            {id:2, name:'Petya'},
            {id:3, name:'Sveta'},
        ],
        messagesData: [
            {id:1, name:'LOL'},
            {id:2, name:'Funny message'},
            {id:3, name:'Not funny message'},
        ],
    },
    profilePage:{
        postsData: [
            {id:1, msg:"Hello wordl",likes:'25'},
            {id:2, msg:"It's my life",likes:'2'},
            {id:3, msg:"React is so good",likes:'6'},
            {id:4, msg:"Fair enough!",likes:'13'},
        ],
        newPostText:'aaaaaa'
    }

}

export let addPost = ()=>{
    state.profilePage.postsData.push(
        {
            id:5,
            msg:state.profilePage.newPostText,
            likes:'0'
        })
    state.profilePage.newPostText ='';
    renderEntireTree(state);
}

export let changeNewPostText = (text) =>{
    state.profilePage.newPostText = text;
    renderEntireTree(state);

}



export default state;