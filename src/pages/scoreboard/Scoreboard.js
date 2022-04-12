import React from 'react';
import './Scoreboard.css';
import ScoreEntry from './ScoreEntry';

function Scoreboard() {
  return (
    <div>
      <h1 className='scoreboard-heading'>Scoreboard</h1>
      <ScoreEntry place='Place' user='User' score='Score' />
    </div>
  );
}

export default Scoreboard;
