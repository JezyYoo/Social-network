import {addPost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state)=>{
    return{
        posts:state.profilePage.postsData,
        newText:state.profilePage.newPostText
    }
}

// const mapDispatchToProps = (dispatch)=>{
//     return{
//         addPost: (text)=>{dispatch(addPostActionCreator(text))},
//         updatePostText: (text) => {dispatch(changeNewPostTextActionCreator(text))}
//     }
// }

const MyPostsContainer = connect(mapStateToProps,{addPost})(MyPosts);

export default MyPostsContainer;