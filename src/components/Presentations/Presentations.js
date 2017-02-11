// ./src/components/Presentations.js
import React from 'react';
import Event from './Event';
import { PageHeader } from 'react-bootstrap';
import info from '../../constants/presentationInfo';

// added header portion
export default (props) => {
  return (
    <div className="Presentations">
      <div className="container">

        <PageHeader> Presentations </PageHeader>
        { 
          info.performances.map((el, idx) => {
            return <Event info={el} key={idx} />
          })
        }
      </div>
    </div>
  );
}

