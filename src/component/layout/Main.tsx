import React from 'react';
import PropTypes from 'prop-types';

import Header from './header/header';
import Footer from './footer/footer';
import SideBar from './sidebar/sidebar';
import Section from './section/section';



/* Main Compoent */
const MainLayout: React.FC = ({children}) => {
  
  /* Renderer */
  return (
    <div className="Main">
      <Header/>
      <SideBar />
      <Section>{children}</Section> 
      <Footer/>
    </div>
  );
}

/* Exports */
export default MainLayout;