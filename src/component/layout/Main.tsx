import React from 'react';

import './main.less'
import Insidebar from './in-sidebar/in-sidebar';
import InSection from './in-section/in-section'
//import Header from './header/header';


/* Main Compoent */
const MainLayout: React.FC = ({children}) => {
  
  /* Renderer */
  return (
    <div>
      
      <Insidebar/>
      <InSection children={children}/>
      
  </div>
  );
}

/* Exports */
export default MainLayout;