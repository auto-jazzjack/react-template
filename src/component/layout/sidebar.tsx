/* src/layouts/Main/SideBar/SideBar.js */
/* React */
import React from 'react';
import PropTypes from 'prop-types';

/* Styled */
import styled from 'styled-components';

/* Sub Components */
import SideBarNav from './sidebar-nav';

/* Styled Components */
const Container = styled.div`
  position: fixed;
  left: 0;
  height: 100%;
  width: 240px;
  background-color: lightgreen;
`;

/* Constant Variables */
const items_value = [
  { label: "홈", href: "/home" },
  { label: "게시판", href: "/board" },
  { label: "상품", href: "/product" }
];

export type Item = {
  label: string,
  href: string,
};

/* Main Compoent */
const SideBar = () => {
  /* Props */
 
  /* Renderer */
  return (
    <Container className='SideBar' >
      SideBar
      <SideBarNav items={ items_value } />
    </Container>
  );
}

/* Main Component Settings */
SideBar.propTypes = {
  className: PropTypes.string,
}

/* Exports */
export default SideBar;