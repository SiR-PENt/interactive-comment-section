import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';

const Login = ({setToken}) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

  return <div className='login-wrapper'>
      <p>Login to your account</p>
      <form>
        <div className='form-control'>
        <label htmlFor='username'>Username:</label>
        <input type='text' id='username' name='username' value={userName} onChange={(e)=> setUserName(e.target.value)}/>
        </div>
        <div className='form-control'>
         <label htmlFor='password'>Password:</label>
        <input type='password' id='password' name='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
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
