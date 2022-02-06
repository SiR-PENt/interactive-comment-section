import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';

const loginUser = async (credentials) => {
   return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}// it fetches from the node server in localhost8080

const Login = ({setToken}) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({userName, password});// token here takes the user's username and password
        setToken(token);
    }
    
  return <div className='login-wrapper'>
      <p>Login to your account</p>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
        <label htmlFor='username'>Username:</label>
        <input type='text' id='username' name='username' 
        value={userName} 
        onChange={(e)=> setUserName(e.target.value)}/>
        </div>
        <div className='form-control'>
         <label htmlFor='password'>Password:</label>
        <input type='password' id='password' name='password' 
        value={password} 
        onChange={(e)=> setPassword(e.target.value)}/>
        </div>
        <div className='btn-container'>
            <button type='submit'>Submit</button>
        </div>
      </form>
  </div>;
};

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
export default Login;
