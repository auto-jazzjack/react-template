import React from 'react';

import './main.less'
import Insidebar from './in-sidebar/in-sidebar';
import Header from './header/header';
import Footer from './footer/footer';
import Section from './section/section';



/* Main Compoent */
const MainLayout: React.FC = ({children}) => {
  
  /* Renderer */
  return (
    <div className="MainLayout">
      <Header/>
      <Insidebar />
      <Section>{children}</Section> 
      <Footer/>
    </div>
  );
}

/* Exports */
export default MainLayout;