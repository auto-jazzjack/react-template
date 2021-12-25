import React from 'react';
import PropTypes from 'prop-types';

/* Styled */
import styled, { createGlobalStyle } from 'styled-components';

/* Sub Components */
import Header from './header';
import Footer from './footer';
import SideBar from './sidebar';
import Section from './section';

/* Global Styled */
const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%
  }
	body {
		padding: 0;
    margin: 0;
  }
  #root {
    height: 100%;
  }
`;

/* Styled Components */
const Container = styled.div`
  padding-top: 56px;
  height: 100%;
  padding-left: 240px;
`;



/* Main Compoent */
const MainLayout: React.FC = ({children}) => {
  
  /* Renderer */
  return (
    <Container className="Main">
      <GlobalStyle />
      <Header className='header'/>
      <SideBar />
      <div>{children}</div> 
      <Footer className='footer'/>
    </Container>
  );
}

/* Exports */
export default MainLayout;