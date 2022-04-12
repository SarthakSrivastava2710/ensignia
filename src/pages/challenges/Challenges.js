import React from 'react';
import Category from './Category';
import './Challenges.css';

function challenge() {
  return (
    <div className='challenge-category'>
      <Category category='Cryptography' />
      <Category category='Cryptography' />
    </div>
  );
}

export default challenge;
