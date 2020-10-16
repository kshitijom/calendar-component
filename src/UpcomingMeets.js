import React from 'react';
import Meeting from './Meeting';
import './UpcomingMeets.css';

function UpcomingMeets() {
  return (
    <div className='UpcomingMeets'>
      <h3>Upcoming Meetings</h3>
      <ul style={{listStyleType: 'none', padding: '0', marginTop: '0'}}>
        <li>
          <Meeting date='18' month='October' name='Meeting Name XYZ'/>
        </li>
        <li>
          <Meeting date='22' month='October' name='Thumbstack Scrum'/>
        </li>
        <li>
          <Meeting date='25' month='October' name='Meeting Name XYZ'/>
        </li>
      </ul>
      <div className='show-more'>
        <a href='#'>VIEW MORE MEETINGS</a>
      </div>
    </div>
  );
};

export default UpcomingMeets;
