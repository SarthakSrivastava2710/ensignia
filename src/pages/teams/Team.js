import React from 'react';
import './Team.css';
import Card from './Card';
import Images from './images/Image';

function Team() {
  return (
    <div className='team-container'>
      <h1>Our Team</h1>
      <div className='cards'>
        <Card profilePic={Images.sarthak} name='Sarthak Srivastava' />
        <Card profilePic={Images.sarthak} name='Sarthak Srivastava' />
        <Card profilePic={Images.sarthak} name='Sarthak Srivastava' />
        <Card profilePic={Images.sarthak} name='Sarthak Srivastava' />
      </div>
    </div>
  );
}

export default Team;
