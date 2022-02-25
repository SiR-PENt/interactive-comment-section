import React,{ useState, useContext, useEffect, useReducer} from 'react'
import data from './data.json';
import reducer from './reducer';
import {v4 as uuid4 } from 'uuid';


const AppContext = React.createContext();// call the context api

const Context = ({children}) => {



// useEffect(() => {
//     localStorage.setItem('newComments',JSON.stringify(newComments))
//   },[newComments]);

// const getLocalStorage = () => {
//   return localStorage.getItem('newComments');
// }

const modifyComment = data.comments.map(comment => {
  const commentsId = uuid4();
  const {replies} = comment;
    const modifiedReply = replies.map(reply => { 
    const id = uuid4()
    return  {...reply, id}
   })

  return {...comment, id:commentsId, replies:modifiedReply }
});//this changes the id of the comment and replies

const initialState = {...data, comments:modifyComment};//update the comment with modifiedComment variable

const [state, dispatch] = useReducer(reducer, initialState);


const toggleCommentScore = (id, type) => dispatch({type:'TOGGLE_COMMENT', payload:{id, type}});

const toggleReplyScore = (id, type) => (dispatch({type: 'TOGGLE_REPLY' , payload:{id, type}}));

const handleNewReplySubmit = (id, content, setToDefault, newId) => {
   return function(e){
     return dispatch({type: 'HANDLE_REPLY_SUBMIT', payload:{ e, id, content, setToDefault, newId }});
}
}
  const handleNewCommentSubmit = (id, content, setToEmptyString) => {
   return function(e){
     return dispatch({type: 'HANDLE_COMMENT_SUBMIT', payload:{e, id, content, setToEmptyString}});
}
}
 const handleReply = (commentId, replyId, content, newId, toDefault) => {
   return function(e) {
        return dispatch({type: 'HANDLE_REPLY', payload:{e, commentId, replyId, content, newId, toDefault}})
   }
 }
  return (
    <AppContext.Provider value={{ toggleCommentScore, toggleReplyScore, state, handleNewReplySubmit, handleNewCommentSubmit, handleReply }}>
        {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}
export default Context;