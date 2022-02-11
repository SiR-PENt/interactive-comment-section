import React,{ useContext, useReducer} from 'react'
import reducer from './reducer';
import data from './data.json';

const AppContext = React.createContext();// call the context api

const Context = ({children}) => {
  const [state, dispatch] = useReducer(reducer, data);

  const toggleAmmount = (id, type) => {
      dispatch({type:'TOGGLE_AMOUNT', payload:{id, type}});
  }

  return (
    <AppContext.Provider value={{toggleAmmount}}>
        {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export default Context;