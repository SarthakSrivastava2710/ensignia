import React, { useState } from 'react';
import './SignUp.css';

function SignUp() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [pNumber, setPNumber] = useState('');

  return (
    <div className='signup'>
      <div className='signup-container'>
        <div className='signup-body'>
          <h2>SignUp</h2>
        </div>
        <div className='signup-body-body'>
          <form>
            <div className='sign-up-name'>
              <div className='signup-body-body-container-input'>
                <label>First name</label>
                <input
                  type='text'
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  placeholder='Sarthak'
                />
              </div>
              <div className='signup-body-body-container-input'>
                <label>Last name</label>
                <input
                  type='text'
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  placeholder='Srivastava'
                />
              </div>
            </div>

            <div className='signup-body-body-container-input'>
              <label>Email</label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='sarthak@gmail.com'
              />
            </div>
            <div className='sign-up-name'>
              <div className='signup-body-body-container-input'>
                <label>Password</label>
                <input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='signup-body-body-container-input'>
                <label>Confirm Password</label>
                <input
                  type='password'
                  value={confPassword}
                  onChange={(e) => setConfPassword(e.target.value)}
                />
              </div>
            </div>
            <div className='signup-body-body-container-input'>
              <label>Phone number</label>
              <input
                type='tel'
                value={pNumber}
                onChange={(e) => setPNumber(e.target.value)}
                placeholder='9999999999'
              />
            </div>
            <div className='signup-body-body-container-button'>
              <button type='submit' className='signup-submit-button'>
                SignUp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
