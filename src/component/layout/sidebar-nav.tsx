import React from 'react';
import PropTypes from 'prop-types';

/* Styled */
import styled from 'styled-components';
import SideBarNavItem from './sidebar-navitem';
import {Item} from './sidebar'
/* Sub Components */

/* Styled Components */
const List = styled.ul`
  height: 100%;
`;


type Props = {
  items :Item[]
}

/* Main Compoent */
const SideBarNav = ({
  items
} :Props) => {
  
  return (
    <List className='sidebar'>
     
    </List>
  );
}

/* Exports */
export default SideBarNav;