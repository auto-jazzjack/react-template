/* src/layouts/Main/Section/Section.js */
/* React */
import React from 'react';
import PropTypes from 'prop-types';

/* Styled */
import styled from 'styled-components';

/* Styled Components */
const Container = styled.div`
  height: 100%;
  width: 100%;
`;
const Wrapper = styled.div`
  height: 100%;
`;

type Props ={
  className : string
  children: Node
}


/* Main Compoent */
const Section = ({className, children}:Props) => {

  /* Renderer */
  return (
    <Container className={ className }>
      <Wrapper>
        { children }
      </Wrapper>
    </Container>
  );
}

/* Main Component Settings */
Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

/* Exports */
export default Section;