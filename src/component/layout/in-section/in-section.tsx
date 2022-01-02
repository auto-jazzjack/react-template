import React from 'react';
import InHeader from '../header/in-header';
import './in-section.less'

const InSection: React.FC = ({children}) => {

  /* Renderer */
  return (
      <div>
          <InHeader/>
          <div className='InSection'>
          1asdasddasdasddasdasddasdasddasdasddasdasddasdasddasdasddasdasddasdasddasdasdd
            { children }
          </div>
      </div>
  );
}

export default InSection;