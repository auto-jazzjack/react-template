import React from 'react';

const Section: React.FC = ({children}) => {

  /* Renderer */
  return (
      <div className='Section'>
        { children }
      </div>
  );
}

export default Section;