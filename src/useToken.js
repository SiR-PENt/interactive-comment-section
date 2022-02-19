import React, {useState} from 'react';

const useToken = () => {

function getToken() {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token  
    }//as the component mounts, the getToken function fetches the token from the localStorage. If null, it renders the login component.

  const [ token, setToken ] = useState(getToken());// then set it as the state value for the token

function saveToken(userToken) {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken?.token);
}// here, after user inputs login details, it sets it to the localStorage data and saves the new token with setToken, making the token not null
 
return {
    setToken: saveToken,
    token
  }
  //here, we are returning setToken and token, which will later be used in the app component
};

export default useToken;

