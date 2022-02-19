import React,{ useState, useContext, useEffect, useReducer} from 'react'
import data from './data.json';
import reducer from './reducer';
import {v4 as uuid4 } from 'uuid';


const AppContext = React.createContext();// call the context api

const Context = ({children}) => {

// const newComments  = dataComments();

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

const initialState = {...data, comments:modifiedComment};//update the previous data with the new comment that was generated

const [state, dispatch] = useReducer(reducer, initialState);

const toggleAmount = (id, type) => {
      dispatch({type:'TOGGLE_AMOUNT', payload:{id, type}});
}

  return (
    <AppContext.Provider value={{ toggleAmount, state }}>
        {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export default Context;