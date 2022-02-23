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
  const id = uuid4();
  return {...comment, id};
});//this changes the id of the comment

const initialState = {...data, comments:modifyComment};//update the comment with modifiedComment variable


const [state, dispatch] = useReducer(reducer, initialState);

const toggleCommentScore = (id, type) => dispatch({type:'TOGGLE_COMMENT', payload:{id, type}});

const handleNewReplySubmit = (id, content, setToEmptyString, setToFalse, newId) => {
   return function(e){
     return dispatch({type: 'HANDLE_REPLY_SUBMIT', payload:{e, id, content, setToEmptyString, setToFalse, newId}});
}
}
  const handleNewCommentSubmit = (id, content, setToEmptyString) => {
   return function(e){
     return dispatch({type: 'HANDLE_COMMENT_SUBMIT', payload:{e, id, content, setToEmptyString}});
}
}
const toggleReplyScore = (id, type) => (dispatch({type: 'TOGGLE_REPLY' , payload:id}))

  return (
    <AppContext.Provider value={{ toggleCommentScore, toggleReplyScore, state, handleNewReplySubmit, handleNewCommentSubmit }}>
        {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}
export default Context;