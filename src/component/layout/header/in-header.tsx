import './in-header.less'
import {Header} from'semantic-ui-react'
import React from 'react';

const InHeader = () => {
  
  return (
    <div className='inHeader'>
      <Header as='h1' content='This is example'/>

    </div>
  );
}

/* Exports */
export default InHeader;