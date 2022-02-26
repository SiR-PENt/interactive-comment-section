import React,{ useContext, useEffect, useReducer} from 'react'
import data from './data.json';
import reducer from './reducer';
import {v4 as uuid4 } from 'uuid';


const AppContext = React.createContext();// call the context api

 const fetchFromLocalStorage = () => JSON.parse(localStorage.getItem('state'))

const Context = ({children}) => {

const modifyComment = data.comments.map(comment => {
  const today = new Date();
  const createdAt = today.getFullYear()+'/'+(today.getMonth() + 1 )+'/'+today.getDate();
  const commentsId = uuid4();
  const {replies} = comment;
    const modifiedReply = replies.map(reply => { 
    const today = new Date();
    const createdAt = today.getFullYear()+'/'+(today.getMonth() + 1 )+'/'+today.getDate();
    const id = uuid4()
    return  {...reply, id, createdAt}
   })

  return {...comment, id:commentsId, replies:modifiedReply, createdAt }
});//this changes the id of the comment and replies

const initialState = fetchFromLocalStorage() ? fetchFromLocalStorage() : {...data, comments:modifyComment};//update the comment with modifiedComment variable

const [state, dispatch] = useReducer(reducer, initialState);

useEffect(() => {
    localStorage.setItem('state',JSON.stringify(state))
  },[state]);


const toggleCommentScore = (id, type) => dispatch({type:'TOGGLE_COMMENT', payload:{id, type}});

const toggleReplyScore = (id, type) => (dispatch({type: 'TOGGLE_REPLY' , payload:{id, type}}));

const handleNewReplySubmit = (id, content, setToDefault, newId, isEditing) => {
   return function(e){
     return dispatch({type: 'HANDLE_REPLY_SUBMIT', payload:{ e, id, content, setToDefault, newId, isEditing }});
}
}
  const handleNewCommentSubmit = (id, content, setToEmptyString) => {
   return function(e){
     return dispatch({type: 'HANDLE_COMMENT_SUBMIT', payload:{e, id, content, setToEmptyString}});
}
}
 const handleReplyToReply = (commentId, replyId, content, newId, toDefault, isEditing) => {
   return function(e) {
        return dispatch({type: 'HANDLE_REPLY_TO_REPLY', payload:{e, commentId, replyId, content, newId, toDefault, isEditing}})
   }
 }

const handleCommentDelete = (id) => dispatch({type: 'HANDLE_COMMENT_DELETE', payload:id})

const handleReplyDelete = (commentId, replyId) => dispatch({type: 'HANDLE_REPLY_DELETE', payload:{commentId, replyId}});

const handleCommentEdit = (commentId, startEdit, setNewContent) => dispatch({type: 'HANDLE_COMMENT_EDIT', payload:{commentId, startEdit, setNewContent}})

const handleReplyEdit = (commentId, id, initializeEdit, setNewContent) => dispatch({type: 'HANDLE_REPLY_EDIT', payload:{commentId, id, initializeEdit, setNewContent}})

  return (
    <AppContext.Provider value={{ toggleCommentScore, 
    toggleReplyScore, 
    state, 
    handleNewReplySubmit, 
    handleNewCommentSubmit, 
    handleReplyToReply, 
    handleCommentDelete, 
    handleReplyDelete, 
    handleCommentEdit,
    handleReplyEdit }}>
        {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}
export default Context;