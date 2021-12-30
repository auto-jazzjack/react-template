import React from 'react';

import './main.less'
import Insidebar from './in-sidebar/in-sidebar';
//import Header from './header/header';
//import Section from './section/section';


/* Main Compoent */
const MainLayout: React.FC = ({children}) => {
  
  /* Renderer */
  return (
    <div>
      <Insidebar/>
      
  </div>
  );
}

/* Exports */
export default MainLayout;