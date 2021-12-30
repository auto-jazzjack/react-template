import './in-header.less'
import {Header} from'semantic-ui-react'
import React from 'react';

const InHeader = () => {
  
  return (
    <div className='InHeader'>
      <Header as='h2' image='/images/icons/school.png' content='Learn More' />

    </div>
  );
}

/* Exports */
export default InHeader;