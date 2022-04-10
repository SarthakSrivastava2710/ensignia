import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className='team-member-card'>
      <div className='team-member-image'>
        <img src={props.profilePic} alt='' />
      </div>
      <h2 className='team-member-name'>{props.name}</h2>
    </div>
  );
}

export default Card;
