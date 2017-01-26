// ./src/components/Dances.js
import React from 'react';
import { Jumbotron, ResponsiveEmbed } from 'react-bootstrap';
/* import './../styles/Dances.css'; */

const Dances = () => (
  <Jumbotron className="dances">
    <ResponsiveEmbed a16by9>
      <iframe src="http://www.youtube.com/embed/?listType=user_uploads&list=RaicesPeruanas"></iframe>
    </ResponsiveEmbed>
  </Jumbotron>
);

export default Dances;
