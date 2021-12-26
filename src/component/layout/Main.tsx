import React from 'react';

import './main.less'
import Header from './header/header';
import Footer from './footer/footer';
import SideBar from './sidebar/sidebar';
import Section from './section/section';



/* Main Compoent */
const MainLayout: React.FC = ({children}) => {
  
  /* Renderer */
  return (
    <div className="MainLayout">
      <Header/>
      <SideBar />
      <Section>{children}</Section> 
      <Footer/>
    </div>
  );
}

/* Exports */
export default MainLayout;