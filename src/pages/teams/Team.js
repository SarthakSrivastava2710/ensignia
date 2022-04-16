import React from 'react';
import './Team.css';
import Card from './Card';
import Images from './images/Image';

function Team() {
  return (
    <div className='team-container'>
      <h1>Our Team</h1>
      <div className='cards'>
        <Card
          profilePic={Images.sarthak}
          name='Sarthak Srivastava'
          link='https://sarthaksrivastava2710.github.io/portfolio/'
        />
        <Card
          profilePic={Images.tanu}
          name='Tanu Verma'
          link='https://www.linkedin.com/in/tanu-verma-853010191/'
        />
        <Card
          profilePic={Images.yajus}
          name='Yajus Gakhar'
          link='https://www.instagram.com/angryaunty6/'
        />
        <Card
          profilePic={Images.yukti}
          name='Yukti Ghablani'
          link='https://www.linkedin.com/in/yukti-ghablani-2264a81b1/'
        />
      </div>
    </div>
  );
}

export default Team;
