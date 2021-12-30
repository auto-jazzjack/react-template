import React from 'react';

import './main.less'
import Insidebar from './in-sidebar/in-sidebar';
import InHeader from './header/in-header';
//import Header from './header/header';
//import Section from './section/section';


/* Main Compoent */
const MainLayout: React.FC = ({children}) => {
  
  /* Renderer */
  return (
    <div>
      <InHeader/>
      <Insidebar/>
      
  </div>
  );
}

/* Exports */
export default MainLayout;