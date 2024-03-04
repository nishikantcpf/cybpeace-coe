import React from 'react';
import Button from './Button';

const KeyComponents = ({ bgImage, content, buttonContent, to }) => {
  return (
    <>    
        <div className='component-image'>
            <img src={bgImage} alt="coe-key-component" />
        </div>
        <div className='component-container'>
            <h3>{ content }</h3>
            <Button content={buttonContent} to={to} />
        </div>
    </>
  )
}

export default KeyComponents;