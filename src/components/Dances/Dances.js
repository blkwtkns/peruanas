// ./src/components/Dances.js
import React from 'react';
import { Jumbotron, ResponsiveEmbed } from 'react-bootstrap';

const Dances = () => (
  <div className='dances'>
    {/* <Jumbotron> */}
      <ResponsiveEmbed a16by9>
        <iframe src="http://www.youtube.com/embed/?listType=user_uploads&list=RaicesPeruanas"></iframe>
      </ResponsiveEmbed>
    {/* </Jumbotron> */}
  </div>
);

export default Dances;
