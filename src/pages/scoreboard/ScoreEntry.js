import React from 'react';
import './ScoreEntry.css';

function ScoreEntry(props) {
  return (
    <div className='score-entry-container'>
      <div className='score-entry'>
        <span className='score-place'>{props.place}</span>
        <span className='score-user'>{props.user}</span>
        <span className='score-score'>{props.score}</span>
      </div>
      <hr />
    </div>
  );
}

export default ScoreEntry;
