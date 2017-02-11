// ./src/components/Presentations.js
import React from 'react';
import Event from './Event';
import info from '../../constants/presentationInfo';

// added header portion
export default (props) => {
  return (
    <div className="container">
      { 
        info.performances.map((el, idx) => {
          return <Event info={el} key={idx} />
        })
      }
    </div>
  );
}

