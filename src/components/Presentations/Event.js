// ./src/components/Events.js
import React from 'react';

export default (props) => {
  return (
    <div className="event">
      <h1 className="event-date">{props.info.date}</h1>
      <p className="event-info">{props.info.location}</p>
      <p className="event-info">{props.info.about ? props.info.about : null}</p>
      <p className="event-info">{props.info.time ? props.info.time : null}</p>
      <p className="event-info">{props.info.address ? props.info.address : null}</p>
    </div>
  );
}
