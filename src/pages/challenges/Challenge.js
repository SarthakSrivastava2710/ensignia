import React from 'react';
import './Challenge.css';

function challenge(props) {
  return (
    <div className='challenge-container'>
      <div className='challenge-content'>
        <h1 className='challenge-name'>{props.chalName}</h1>
        <h3 className='challenge-score'>{props.chalScore}</h3>
      </div>
    </div>
  );
}

export default challenge;
