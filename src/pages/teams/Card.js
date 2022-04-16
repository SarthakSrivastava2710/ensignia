import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <a href={props.link} target='_blank' rel='noreferrer' className='team-member-card-card'>
      <div className='team-member-card'>
        <div className='team-member-image'>
          <img src={props.profilePic} alt='' />
        </div>
        <h2 className='team-member-name'>{props.name}</h2>
      </div>
    </a>
  );
}

export default Card;
