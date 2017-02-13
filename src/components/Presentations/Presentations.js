// ./src/components/Presentations/Presentations.js
import React from 'react';
import Event from './Event';
import { PageHeader } from 'react-bootstrap';
import Separator from '../SepComponent';
import info from '../../constants/presentationInfo';

// added header portion
export default (props) => {
  return (
    <div className="Presentations">
      <div className="container">

        <PageHeader> Presentations </PageHeader>
        { 
          info.performances.map((el, idx, arr) => {
            return idx === arr.length - 1 ? <Event info={el} key={idx} /> : [<Event info={el} key={idx} />, <Separator />];
          })
        }
      </div>
    </div>
  );
}

