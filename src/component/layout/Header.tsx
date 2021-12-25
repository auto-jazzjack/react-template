/* src/layouts/Main/Header/Header.js */
/* React */
import React from 'react';
import PropTypes from 'prop-types';

/* Styled */
import styled from 'styled-components';

/* Styled components */
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 56px;
  width: 100%;
  background-color: skyblue;
`;

type Props ={
  className : string
}
/* Main Compoent */
const Header = ({className} : Props) => {
  /* Renderer */
  return (
    <Container className={ className }>
      Header
    </Container>
  );
}

/* Main Component Settings */
Header.propTypes = {
  className: PropTypes.string,
}

/* Exports */
export default Header;