import React from 'react';

import './main.less'
//import Insidebar from './in-sidebar/in-sidebar';
import InSection from './in-section/in-section'
import InHeader from './header/in-header'
import InFooter from './footer/footer'
//import Header from './header/header';


/* Main Compoent */
const MainLayout: React.FC = ({children}) => {
  
  /* Renderer */
  return (
    <div>
      <InHeader/>
      {/* <Insidebar/>  */}
      <InSection children={children}/>
      <InFooter/>
  </div>
  );
}

/* Exports */
export default MainLayout;