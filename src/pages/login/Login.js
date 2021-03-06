import React, { useState } from 'react';
import './Login.css';
// import SignUp from '../signup/SignUp';
import { NavLink } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='login'>
      <div className='login-container'>
        <div className='login-body'>
          <h2>Login</h2>
        </div>
        <div className='login-body-body'>
          <form>
            <div className='login-body-body-container'>
              <div className='login-body-body-container-input'>
                <label>Email</label>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='sarthak@gmail.com'
                />
              </div>
              <div className='login-body-body-container-input'>
                <label>Password</label>
                <input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='login-body-body-container-button'>
                <button type='submit' className='login-submit-button'>
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
        <h4 className='ask-signup'>
          Not registered? <NavLink to='../signup/SignUp'> Sign Up now!</NavLink>
        </h4>
      </div>
    </div>
  );
}

export default Login;
