import React,{ useState, useContext, useEffect, useReducer} from 'react'
import reducer from './reducer';
import dataComments from './dataComments'

const AppContext = React.createContext();// call the context api

const Context = ({children}) => {

const newComments  = dataComments();

useEffect(() => {
    localStorage.setItem('newComments',JSON.stringify(newComments))
  },[newComments]);

const getLocalStorage = () => {
  return localStorage.getItem('newComments');
}
const initialState = JSON.parse(getLocalStorage())

const [state, dispatch] = useReducer(reducer, initialState);

const toggleAmount = (id, type) => {
      dispatch({type:'TOGGLE_AMOUNT', payload:{id, type}});
}

  return (
    <AppContext.Provider value={{ toggleAmount, state, }}>
        {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export default Context;