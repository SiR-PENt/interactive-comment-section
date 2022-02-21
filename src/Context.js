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

const modifiedComment = data.comments.map(comment => {
  const id = uuid4();
  return {...comment, id};
});//this changes the id of the comment

const initialState = {...data, comments:modifiedComment};//update the comment with modifiedComment variable

const [state, dispatch] = useReducer(reducer, initialState);

const toggleAmount = (id, type) => dispatch({type:'TOGGLE_AMOUNT', payload:{id, type}});

const handleSubmit = (id, content) => {
 return function(e) {
 return dispatch({type:'HANDLE_SUBMIT', payload:{e, id, content}});
}
}//JACKPOT!!

return (
    <AppContext.Provider value={{ toggleAmount, state, handleSubmit }}>
        {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}
export default Context;