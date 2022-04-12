import React from 'react';
import './Category.css';
import Challenge from './Challenge';

function Category(props) {
  return (
    <div>
      <h1 className='category-heading'>{props.category}</h1>
      <div className='challeges-container'>
        <Challenge chalName='Encrypt14n St4nd4rd' chalScore='100' />
        <Challenge chalName='H1dd3n f1L3$' chalScore='300' />
        <Challenge chalName='M3t4EXPLOIT' chalScore='250' />
      </div>
    </div>
  );
}

export default Category;
